import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import { getDialogs, getDialogsMessage } from '../../redux/selectors/dialog-selector';

const mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getDialogsMessage(state)
    }
}
export default connect(mapStateToProps)(Dialogs);