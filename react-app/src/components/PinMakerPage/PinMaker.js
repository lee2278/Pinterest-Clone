import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { createPinThunk } from "../../store/pins"
import { getBoardsThunk } from "../../store/boards"
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
    
    // have to remember to change board id once i get to boards crud
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


    return (
        <>
            <div className='pin-creation-container'>
                <form id='pin-creation-form'>

                    <div className='left-side'>
                        <input
                            type='text'
                            value={imageUrl}
                            placeholder='Image url'
                            onChange={(e) => setImageUrl(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className='right-side'>
                        <div className='save-btn-container'>
                            <select onChange={(e) => setBoardId(e.target.value)}>
                                {boardsList.map((board) => (
                                <option value={board.id}>{board.name}</option>))}

                            </select>
                            <button id="save-btn" onClick={handleSubmit}>Save</button>
                        </div>
                        <input
                            type='text'
                            value={title}
                            placeholder='Add your title'
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>

                        <textarea
                            value={description}
                            placeholder='Tell everyone what your pin is about'
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}
