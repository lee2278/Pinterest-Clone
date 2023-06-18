import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { createPinThunk } from "../../store/pins"
import { getBoardsThunk } from "../../store/boards"
import OpenModalButton from "../OpenModalButton"
import CreateBoardModal from "../UserCollectionsPage/CreateBoardModal"
import "./PinMaker.css"



export default function PinMaker() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [boardId, setBoardId] = useState(null)
    const [errors, setErrors] = useState({})

    const owner = useSelector(state => state.session.user)
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)


    useEffect(() => {
        dispatch(getBoardsThunk())
    }, [dispatch])


    const newPin = {
        title,
        description,
        image_url: imageUrl,
        owner_id: owner.id,
        board_id: boardId
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({})

        const newErrors = {}
        if (!title) newErrors.title = 'Please provide a title for your pin'
        if (title.length > 50) newErrors.title = 'Please keep title under 50 characters'
        if (!imageUrl) newErrors.imageUrl = 'Please provide an image url for your pin'
        if (!boardId) newErrors.boardId = 'Please select a board or create one for this pin'

        if (Object.values(newErrors).length) {
            setErrors(newErrors)
            return
        }

        await dispatch(createPinThunk(newPin))
        history.push('/')
    }

    const preventDefaults = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='pin-creation-container'>
                <form id='pin-creation-form' onSubmit={preventDefaults}>

                    <div className='left-side'>
                        <input className='url-input'
                            type='text'
                            value={imageUrl}
                            placeholder='Image url'
                            onChange={(e) => setImageUrl(e.target.value.trim())}
                        >
                        </input>
                        <div className='image-container'>
                            <img id='provided-pin-img' src={imageUrl} alt=''></img>
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='save-btn-container'>
                            {boardsList.length > 0
                                ? (
                                    <>
                                        <div className='create-board-btn-container'>
                                        <OpenModalButton
                                            buttonText="Create a board"
                                            modalComponent={<CreateBoardModal />}
                                        />
                                        </div>
                                        <select onChange={(e) => setBoardId(e.target.value)} defaultValue="">
                                            <option value="" disabled hidden>Choose Board</option>
                                            {boardsList.map((board) => (
                                                <option key={board.id} value={board.id}>{board.name}</option>))}
                                        </select>

                                    </>
                                )
                                : (<OpenModalButton
                                    buttonText="Create a board"
                                    modalComponent={<CreateBoardModal />}
                                />)
                            }



                            <button id="save-btn" onClick={handleSubmit}>Save</button>
                        </div>
                        
                        <div className='pin-errors-container'>
                        {errors.title && <p className='create-pin-errors'>{errors.title}</p>}
                        {errors.imageUrl && <p className='create-pin-errors'>{errors.imageUrl}</p>}
                        {errors.boardId && <p className='create-pin-errors'>{errors.boardId}</p>}
                        </div>
                        <input className='title-input'
                            type='text'
                            value={title}
                            placeholder='Add your title'
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>
                        
                        <textarea className='description-textarea'
                            value={description}
                            placeholder='Tell everyone what your pin is about (optional)'
                            onChange={(e) => setDescription(e.target.value)}
                            rows='20'
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}
