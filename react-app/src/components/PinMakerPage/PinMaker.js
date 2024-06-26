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
    const [imageUrl, setImageUrl] = useState(null)
    const [board, setBoard] = useState(null)
    const [errors, setErrors] = useState({})
    const [tempSrc, setTempSrc] = useState('')

    const owner = useSelector(state => state.session.user)
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)


    useEffect(() => {
        dispatch(getBoardsThunk())
    }, [dispatch])
    
    const handlePreview = (e) => {
        setImageUrl(e.target.files[0])
        setTempSrc (URL.createObjectURL(e.target.files[0]))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        setErrors({})

        const newErrors = {}
        if (!title) newErrors.title = 'Please provide a title for your pin'
        if (title.length > 100) newErrors.title = 'Please keep title under 100 characters'
        if (!imageUrl) newErrors.imageUrl = 'Please provide an image for your pin'
        if (!board) newErrors.board = 'Please select a board or create one for this pin'

        if (Object.values(newErrors).length) {
            setErrors(newErrors)
            return
        }

        
        const formData = new FormData();
        formData.append("title", title)
        formData.append("description", description)
        formData.append("image_url", imageUrl)
        formData.append("owner_id", owner.id)
        formData.append('boards', board)

        await dispatch(createPinThunk(formData))

        history.push(`/${owner?.username}/created`)
    }

    const preventDefaults = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='pin-creation-container'>
                <form id='pin-creation-form' onSubmit={preventDefaults} encType="multipart/form-data">

                    <div className='left-side'>
                        <input className='url-input'
                            type='file'
                            accept="image/*"
                            onChange={handlePreview}
                        >
                        </input>
                        <div className='image-container'>
                            {imageUrl ? <img id='provided-pin-img' src={tempSrc} alt=''></img> 
                            : <img id='no-img-pic' src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt=''></img>}
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
                                        <div className='select-and-save'>
                                        <select onChange={(e) => setBoard(e.target.value)} defaultValue="">
                                            <option value="" disabled hidden>Choose Board</option>
                                            {boardsList.map((board) => (
                                                <option key={board.id} value={board.id}>{board.name}</option>))}
                                        </select>
                                        <button id="save-btn" onClick={handleSubmit}>Save</button>
                                        </div>
                                    </>
                                )
                                : (
                                    <>
                                    <OpenModalButton
                                    buttonText="Create a board"
                                    modalComponent={<CreateBoardModal />}
                                />
                                <button id="save-btn" onClick={handleSubmit}>Save</button>
                                </>)
                            }
                        </div>
                        
                        <div className='pin-errors-container'>
                        {errors.title && <p className='create-pin-errors'>{errors.title}</p>}
                        {errors.imageUrl && <p className='create-pin-errors'>{errors.imageUrl}</p>}
                        {errors.board && <p className='create-pin-errors'>{errors.board}</p>}
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
