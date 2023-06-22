import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal"
import { editPinThunk } from "../../store/pins";
import { getBoardsThunk } from "../../store/boards"
// import OpenModalButton from "../OpenModalButton";
// import CreateBoardModal from "../UserCollectionsPage/CreateBoardModal";
import './ManagePins.css'


export default function EditModal({ pin }) {

    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [title, setTitle] = useState(pin.title)
    const [description, setDescription] = useState(pin.description)
    // const [boardId, setBoardId] = useState(null)
    const [errors, setErrors] = useState({})



    // const boardsObj = useSelector(state => state.boards.allBoards)
    // const boardsList = Object.values(boardsObj)

    // console.log('boardsList', boardsList)

    //this gives me back an array of boards that have this pin
    // const filteredBoardsList = boardsList.filter(board => board.pins.find(boardpin => boardpin.id === pin.id))

    // console.log('filteredArray', filteredBoardsList)

    const updatedPin = {
        ...pin,
        title,
        description,
        // boards: boardId     //sending back the selected boardId
    }


    useEffect(() => {
        dispatch(getBoardsThunk())
    }, [dispatch])


    // console.log('this is boardId', boardId)

    const handleEdit = async (e) => {
        e.preventDefault()

        setErrors({})
        const newErrors = {}

        if (!title) newErrors.title = 'Please provide a title'
        if (title.length > 100) newErrors.title = 'Please keep title under 100 characters'

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

                {/* {boardsList.length ?
                    <label htmlFor="board-select" className='board-select-label'>Board
                        <select id="board-select" className='choose-board-selection' onChange={(e) => setBoardId(e.target.value)}>
                            <option value="" disabled selected hidden>Choose Board</option>
                            {boardsList.map((board) => (
                                <option value={board.id} onClick={() => setBoardId(board.id)}>{board.name}
                                </option>))}

                        </select>
                    </label>

                    : (<OpenModalButton
                        buttonText="Create a board"
                        modalComponent={<CreateBoardModal />}
                    />)


                } */}

                <button id='save-edit-btn' onClick={handleEdit}>Save</button>
            </form>
        </div>
    )

}
