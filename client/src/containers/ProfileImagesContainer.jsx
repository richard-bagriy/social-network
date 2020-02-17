import { connect } from 'react-redux'
import { updateUserImage } from '../store/Auth/effects'
import { getUserImages } from '../store/Auth/selectors'
import ProfileImages from '../components/Setting/ProfileImages'

const mapStateToProps = state => ({
    images: getUserImages(state)
})

export default connect(mapStateToProps, { updateUserImage })(ProfileImages)