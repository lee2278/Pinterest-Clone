import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal"
import { createBoardThunk } from "../../store/boards";
import "./CreateBoardModal.css"

export default function CreateBoardModal() {

    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const sessionUser = useSelector(state => state.session.user)

    const newBoard = {
        name,
        description,
        user_id: sessionUser.id
    }

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(createBoardThunk(newBoard))

        closeModal()
    }

    return (
        <>
            <h1 id='create-board-h1'>Create board</h1>
            <form id='create-board-form'>
                <label>Name
                    <input className='create-board-inputs'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                </label>
                <label>Description
                    <input className='create-board-inputs'
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </input>
                </label>
                <button onClick={handleCreate}>Create</button>
            </form>
        </>
    )
}