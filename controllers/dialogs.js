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

            const messages = []

            if (userId) {
                const dialog = await Conversations.findOne({
                    members: {
                        $all: [authID, userId]
                    }
                }).select('messages')
                
                if (dialog === null) {
                    const newDialog = await Conversations.create({ members:[authID, userId] })
                    await newDialog.save()
                } else {
                    messages.push(...dialog.messages)
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

            res.json({ dialogs, messages })
        } catch (err) {
            console.log(err)
        }
        
    },
    getDialog: async (req, res) => {
        const { authID } = req.body
        const { userId } = req.params

        try {
            
            const { messages } = await Conversations.findOne({
                members: {
                    $all: [authID, userId]
                }
            }).select('messages')
            
            res.json({ messages })

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

            res.json({ message: 'All good and work' })

        } catch (err) {
            console.log(err)
        }
    }
}