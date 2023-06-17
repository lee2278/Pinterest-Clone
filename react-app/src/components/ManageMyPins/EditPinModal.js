import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal"
import { editPinThunk } from "../../store/pins";
import { getBoardsThunk } from "../../store/boards"

import './ManagePins.css'


export default function EditModal({ pin }) {

    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [title, setTitle] = useState(pin.title)
    const [description, setDescription] = useState(pin.description)
    const [boardId, setBoardId] = useState('')
    const [errors, setErrors] = useState({})

    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const updatedPin = {
        ...pin,
        title,
        description,
        board_id: boardId
    }

    useEffect(() => {
        dispatch(getBoardsThunk())
    }, [dispatch])


    console.log('this is boardId',boardId)

    const handleEdit = async (e) => {
        e.preventDefault()

        setErrors({})
        const newErrors = {}

        if (!title) newErrors.title = 'Please provide a title'
        if (!boardId) newErrors.boardId = 'Please choose a board'

        if (Object.values(newErrors).length) {
            setErrors(newErrors)
            return
        }

        await dispatch(editPinThunk(updatedPin))
        closeModal()
    }

    return (
        <div>
            <h1 id='edit-pin-h1'>Edit Pin</h1>
            <div className='edit-pin-errors-container'>
            {errors.title && <p className='edit-pin-errors'>{errors.title}</p>}
            {errors.boardId && <p className='edit-pin-errors'>{errors.boardId}</p>}
            </div>
            <form id='edit-pin-form' method="PUT">
                <label>Title
                    <input className='edit-pin-inputs'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </input>
                </label>
                <label>Description
                    <textarea className='edit-pin-inputs'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell everyone what your pin is about(optional)"
                        rows='5'
                    >
                    </textarea>
                </label>
                <label htmlFor="board-select" className='board-select-label'>Board
                    <select id="board-select" className='choose-board-selection' onChange={(e) => setBoardId(e.target.value)}>
                        <option value="" disabled selected hidden>Choose Board</option>
                        {boardsList.map((board) => (
                        <option value={board.id} onClick={()=>setBoardId(board.id)}>{board.name}
                        </option>))}

                    </select>
                </label>
                <button onClick={handleEdit}>Save</button>
            </form>
        </div>
    )

}
