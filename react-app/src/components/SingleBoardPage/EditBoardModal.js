import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { editBoardThunk, getBoardsThunk } from "../../store/boards";

export default function EditBoardModal({ board }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const { closeModal } = useModal()
    const [name, setName] = useState(board.name)
    const [description, setDescription] = useState(board.description)

    const sessionUser = useSelector(state => state.session.user);
    
    const updatedBoard = { ...board, name, description }


    const handleEdit = async (e) => {
        e.preventDefault()
        await dispatch(editBoardThunk(updatedBoard))
        history.push(`/${sessionUser.username}/${name}`)
        dispatch(getBoardsThunk())
        closeModal()
    }


    return (
        <div>
            <h1>Edit your board</h1>
            <form method="PUT">
                <label>Name
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                </label>
                <label>Description
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </label>
                <button onClick={handleEdit}>Done</button>
            </form>
        </div>
    )

}
