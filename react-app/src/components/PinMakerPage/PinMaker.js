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
                            onChange={(e) => setImageUrl(e.target.value)}
                        >
                        </input>
                        <div className='image-container'>
                            <img id='provided-pin-img' src={imageUrl}></img>
                        </div>
                    </div>
                    {console.log('boardList length', boardsList.length)}
                    <div className='right-side'>
                        <div className='save-btn-container'>
                            {boardsList.length > 0
                                ? (
                                    <>
                                        <OpenModalButton
                                            buttonText="Create a board for this pin"
                                            modalComponent={<CreateBoardModal />}
                                        />
                                        <select onChange={(e) => setBoardId(e.target.value)}>
                                            <option value="" disabled selected hidden>Choose Board</option>
                                            {boardsList.map((board) => (
                                                <option value={board.id}>{board.name}</option>))}
                                        </select>

                                    </>
                                )
                                : (<OpenModalButton
                                    buttonText="Create a board for this pin"
                                    modalComponent={<CreateBoardModal />}
                                />)
                            }



                            <button id="save-btn" onClick={handleSubmit}>Save</button>
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
                            placeholder='Tell everyone what your pin is about'
                            onChange={(e) => setDescription(e.target.value)}
                            rows='25'
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}
