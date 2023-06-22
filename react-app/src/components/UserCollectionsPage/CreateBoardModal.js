import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal"
import { createBoardThunk } from "../../store/boards";
import "./CreateBoardModal.css"

export default function CreateBoardModal() {

    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})

    const sessionUser = useSelector(state => state.session.user)

    const newBoard = {
        name,
        description,
        user_id: sessionUser.id
    }

    const existingBoardNames = []
    sessionUser.boards.forEach(board => existingBoardNames.push(board.name))


    const handleCreate = (e) => {
        e.preventDefault()

        setErrors({})
        const newErrors = {}

        if (!name) newErrors.name = 'Please provide a name for your board'
        if (name.length > 50) newErrors.name = 'Please keep board name under 50 characters'

        for (let existingName of existingBoardNames) {
            if (name === existingName) newErrors.name = "You've already made a board with this name. Please choose another name for your board."
        }




        if (Object.values(newErrors).length) {
            setErrors(newErrors)
            return
        }

        dispatch(createBoardThunk(newBoard))
        closeModal()
    }

    return (
        <>
            <h1 id='create-board-h1'>Create board</h1>
            <div className='create-board-errors-container'>
                {errors.name && <p className="create-board-errors">{errors.name}</p>}
            </div>
            <form id='create-board-form'>
                <label>Name
                    <input className='create-board-inputs'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                </label>
                <label>Description (optional)
                    <textarea className='create-board-inputs'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </label>
                <button id='create-board-btn' onClick={handleCreate}>Create</button>
            </form>
        </>
    )
}
