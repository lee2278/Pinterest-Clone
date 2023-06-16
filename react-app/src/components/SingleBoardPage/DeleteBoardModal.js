import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { deleteBoardThunk } from "../../store/boards";
import './EditBoardModal.css'

export default function DeleteBoardModal({board}) {
    const dispatch = useDispatch();
    const history = useHistory()
    const { closeModal } = useModal()

	const sessionUser = useSelector(state => state.session.user);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteBoardThunk(board.id))
        history.push(`/${sessionUser.username}`)
        closeModal()
    }

    return (
        <div id='delete-board-modal'>
            <h1 id='delete-board-h1'>Delete this board?</h1>
            <div className='buttons-wrapper'>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )


}
