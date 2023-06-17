import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { deletePinThunk } from "../../store/pins";
import './ManagePins.css'

export default function DeleteModal({pin}) {
    const dispatch = useDispatch();
    const history = useHistory()
    const { closeModal } = useModal()

	const sessionUser = useSelector(state => state.session.user);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deletePinThunk(pin.id))
        history.push(`/${sessionUser.username}/created`)
        closeModal()
    }

    return (
        <div id='delete-pin-modal'>
            <h1 id='delete-pin-h1'>Are you sure?</h1>
            <p>If you delete this Pin, it'll be gone for good.</p>
            <div className='delete-modal-btns-wrapper'>
            <button id='cancel-btn'onClick={closeModal}>Cancel</button>
            <button id='delete-btn'onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )


}
