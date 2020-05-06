const Conversations = require('../models/conversation')
const User = require('../models/user')

module.exports = {
    getAll: async (req, res) => {
        const { authID } = req.body
        const { userId } = req.params
        
        try {
            const haveConversations = await Conversations.find({ members: { $eq: authID } })

            if (!haveConversations.length && !userId) {
                res.json({ dialogs: [], messages: [] })
            }

            const activeUser = {}

            if (userId) {
                const dialog = await Conversations.findOne({
                    members: {
                        $all: [authID, userId]
                    }
                }).select('messages')
                
                if (dialog === null) {
                    const newDialog = await Conversations.create({ members:[authID, userId] })
                    await newDialog.save()
                    activeUser.messages = []
                } else {
                    activeUser.messages = dialog.messages
                }

            }

            const conversations = await Conversations.find({ members: { $eq: authID } })
            const dialogs = await Promise.all(
                conversations.map(async ({ messages, members, _id }) => {
                    const userId = members.filter(member => member != authID)[0]
                    const { name, images: { photo } } = await User.findById({ _id: userId }).select('name images.photo')
                    const lastMessage = messages.length === 0 ? '' : messages[messages.length - 1]
    
                    return {
                        id: _id,
                        userId,
                        userName: name,
                        userImage: photo,
                        lastMessage,
                    }
                    
                })
            )
            
            if (userId) {
                const { userName, userImage } = dialogs.find( d => d.userId == userId )
                activeUser.userName = userName
                activeUser.userImage = userImage
                activeUser.id = userId
            } else {
                const { userId, userName, userImage } = dialogs[0]
                activeUser.userName = userName
                activeUser.userImage = userImage
                activeUser.id = userId
                 
                const { messages } =  await Conversations.findOne({
                    members: {
                        $all: [authID, userId]
                    }
                }).select('messages')

                activeUser.messages = messages
            }

            res.json({ dialogs, activeUser })
        } catch (err) {
            console.log(err)
        }
        
    },
    getDialog: async (req, res) => {
        const { authID } = req.body
        const { userId } = req.params

        try {
            const activeUser = {}

            const { messages } = await Conversations.findOne({
                members: {
                    $all: [authID, userId]
                }
            }).select('messages')

            const { images, name } = await User.findById({ _id: userId}).select('name images.photo')
            
            activeUser.messages = messages
            activeUser.id = userId
            activeUser.userName = name
            activeUser.userImage = images.photo
            
            
            res.json(activeUser)

        } catch (err) {
            console.log(err)
        }
        
    },
    newMessage: async (req, res) => {
        const { authID, message } = req.body
        const { userId } = req.params

        try {
            const dialog = await Conversations.findOne({
                members: {
                    $all: [authID, userId]
                }
            })
            
            dialog.messages.push({ user_id: authID, message })
            await dialog.save()
            
            res.json({ message: dialog.messages[dialog.messages.length - 1] })

        } catch (err) {
            console.log(err)
        }
    }
}