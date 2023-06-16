import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { deletePinThunk } from "../../store/pins";


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
            <h1>Are you sure?</h1>
            <p>If you delete this Pin, it'll be gone for good and those who've saved it won't be able to view it.</p>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>

        </div>
    )


}
