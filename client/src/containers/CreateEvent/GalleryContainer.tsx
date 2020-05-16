import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../store'
import Gallery from '../../components/CreateEvent/Form/Gallery'
import { getGalleryImages, addGalleryImg, removeGalleryImg } from '../../store/Event'

const mapStateToProps = (state: AppStateType) => ({
    images: getGalleryImages(state)
})

const connector = connect(mapStateToProps, { addGalleryImg, removeGalleryImg })
    
type PropsFromRedux = ConnectedProps<typeof connector>
  
const Container = (props: PropsFromRedux) => (<Gallery {...props} />)

export default connector(Container)