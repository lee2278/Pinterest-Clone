import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk, updatePinWithBoardsThunk } from '../../store/pins';
import { getBoardsThunk } from '../../store/boards';
import { createSaveThunk } from '../../store/saves';
import "./ShowPinDetails.css"
import { createCommentThunk, getCommentsThunk } from '../../store/comments';
import { getUsersThunk } from '../../store/users';

export default function ShowPinDetails() {
    const { pinId } = useParams()
    const history = useHistory()

    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    const sessionUser = useSelector(state => state.session.user);
    const usersObj = useSelector(state => state.users.allUsers);
    const usersList = Object.values(usersObj)


    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const commentsObj = useSelector(state => state.comments.allComments)
    const commentsList = Object.values(commentsObj)

    const [boardId, setBoardId] = useState(null)
    const [successfulSave, setSuccessfulSave] = useState(false)
    const [errors, setErrors] = useState({})
    const [comment, setComment] = useState('')



    const pinToUpdate = {
        ...pin,
        boards: boardId
    }

    const newSave = {
        user_id: sessionUser.id,
        pin_id: pin.id
    }


    const newComment = {
        user_id: sessionUser.id,
        pin_id: pin.id,
        comment
    }




    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
        dispatch(getBoardsThunk())
        dispatch(getCommentsThunk())
        dispatch(getUsersThunk())
    }, [dispatch, pinId])


    const goBack = (e) => {
        e.preventDefault()
        history.push(`/${sessionUser.username}`)
    }



    const handleSave = async (e) => {
        e.preventDefault()

        // setErrors({})

        // const newErrors = {}

        // if (!boardId) newErrors.boardId = 'Please choose a board'

        // if (Object.values(newErrors).length) {
        //     setErrors(newErrors)
        //     return
        // }

        if (!boardId) {
            dispatch(createSaveThunk(newSave))
            setSuccessfulSave(true)
        } else {

            await dispatch(updatePinWithBoardsThunk(pinToUpdate))
            dispatch(getPinDetailsThunk(pinId))
            dispatch(createSaveThunk(newSave))
            setSuccessfulSave(true)

        }

    }


    const handlePostComment = async(e) => {
        e.preventDefault()
        await dispatch(createCommentThunk(newComment))
        dispatch(getCommentsThunk())
        setComment('')
    }

    let commentedPersonUsername = ''

    // const findWhoCommented = (commentUserId)  => {
    //     commentedPerson = usersList.find(user => user.id === commentUserId)
    //     commentedPersonUsername = commentedPerson.username
    // }

    // const handlePostComment = (commentUserId) => {
    //     commentedPerson = usersList.find(user => user.id === commentUserId)
    //     commentedPersonUsername = commentedPerson.username

    //     dispatch(createCommentThunk(newComment))
    //     dispatch(getCommentsThunk())
    //     setComment('')
    // }

    return (
        <>
            <div className='main-container'>
                <button id='go-back-btn' onClick={goBack}><span className="material-symbols-outlined">
                    undo
                </span>Go Back to Boards</button>
                <div className='sub-main-container'>
                    <div className='pin-left-side'>
                        <div className='left-img-container'>
                            <img id='specific-pin-img' src={pin.image_url} alt='' />
                        </div>
                    </div>
                    <div className='right-text-section'>
                        {errors.boardId && <p className='none-chosen-error'>{errors.boardId}</p>}
                        <form id='select-board-form'>
                            <select id='select-board-select' onChange={(e) => setBoardId(e.target.value)} onClick={(e) => setSuccessfulSave(false)} defaultValue="">
                                <option value="" disabled hidden>Choose Board</option>
                                {boardsList.map((board) => (
                                    <option key={board.id} value={board.id}>{board.name}</option>
                                ))}
                            </select>
                            <button id='save-pin-btn' onClick={handleSave}>Save</button>
                            {successfulSave && <p id='saved-ptag'>Saved!</p>}
                        </form>
                        <h1 id='pin-title-h1'>{pin.title}</h1>
                        <p id='pin-description-ptag'>{pin.description}</p>

                        <h3>Comments</h3>  
                        {commentsList.map((comment) => (
                            <div key={comment.id}>
                                <span>User make dynamic{comment.user_id}</span>
                                <p>{comment.comment}</p>
                            </div>
                        ))}   
                        <form id='make-comment-section'>
                            <textarea id='comment-writing-textarea'
                            placeholder='Add a comment'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            >
                            </textarea>
                            <button onClick={handlePostComment}>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
