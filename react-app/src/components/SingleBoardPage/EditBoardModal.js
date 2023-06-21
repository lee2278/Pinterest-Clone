import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { editBoardThunk, getBoardsThunk } from "../../store/boards";
import './EditBoardModal.css'


export default function EditBoardModal({ board }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const { closeModal } = useModal()
    const [name, setName] = useState(board.name)
    const [description, setDescription] = useState(board.description)
    const [errors, setErrors] = useState({})

    const sessionUser = useSelector(state => state.session.user);

    const updatedBoard = { ...board, name, description }


    const handleEdit = async (e) => {
        e.preventDefault()

        setErrors({})
        const newErrors = {}

        if (!name) newErrors.name = 'Please provide a name for your board'
        if (name.length > 50) newErrors.name = 'Please keep board name under 50 characters'

        if (Object.values(newErrors).length) {
            setErrors(newErrors)
            return
        }

        await dispatch(editBoardThunk(updatedBoard))
        dispatch(getBoardsThunk())
        closeModal()
    }


    return (
        <div>
            <h1 id='edit-board-h1'>Edit your board</h1>
            <div className='edit-board-errors-container'>
                {errors.name && <p className="edit-board-errors">{errors.name}</p>}
            </div>
            <form id='edit-board-form' method="PUT">
                <label>Name
                    <input className='edit-board-inputs'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                </label>
                <label>Description (optional)
                    <textarea className='edit-board-inputs'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </label>
                <button id='edit-board-btn' onClick={handleEdit}>Done</button>
            </form>
        </div>
    )

}
