import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk, updatePinWithBoardsThunk } from '../../store/pins';
import { getBoardsThunk } from '../../store/boards';
import { createSaveThunk } from '../../store/saves';
import "./ShowPinDetails.css"
import { createCommentThunk, deleteCommentThunk, getCommentsThunk } from '../../store/comments';


export default function ShowPinDetails() {
    const { pinId } = useParams()
    const history = useHistory()

    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    const sessionUser = useSelector(state => state.session.user);



    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const commentsObj = useSelector(state => state.comments.allComments)
    const commentsList = Object.values(commentsObj)
    const filteredCommentsByPinId = commentsList.filter(comment => comment.pin_id === +pinId)


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
    }, [dispatch, pinId])


    const goBack = (e) => {
        e.preventDefault()
        history.push(`/${sessionUser.username}`)
    }



    const handleSave = async (e) => {
        e.preventDefault()



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


    const handlePostComment = async (e) => {
        e.preventDefault()

        setErrors({})

        const newErrors = {}

        if (!newComment.comment) newErrors.comment = 'Cannot create an empty comment'

        if (Object.values(newErrors).length) {
            setErrors(newErrors)
            return
        }

        await dispatch(createCommentThunk(newComment))
        dispatch(getCommentsThunk())
        setComment('')
    }

    const handleEditComment = (commentId) => {
        const commentToEdit = {

        }


    }

    const handleDeleteComment = (commentId) => {
        dispatch(deleteCommentThunk(commentId))
    }


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
                        <div className='right-side-above-comments'>
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

                            <h3 id='comments-h3'>Comments</h3>
                            {filteredCommentsByPinId.map((comment) => (
                                <>
                                <div key={comment.id} className='comment-container'>
                                    <p id='username-ptag'>{comment.username}</p>
                                    <p id='comment-ptag'>{comment.comment}</p>
                                </div>
                                {comment.user_id === sessionUser.id && <><button id='edit-comment-btn'>Edit</button><button id='delete-comment-btn' onClick={() => handleDeleteComment(comment.id)}>Delete</button></>}
                                </>
                            ))}


                        </div>
                        <div className='bottom-comment-area'>
                            <div className='num-comments-and-errors-section'>

                                <p id='num-comments-ptag'>{`${filteredCommentsByPinId.length} Comments`}</p>
                                {errors.comment && <p className='empty-comment-error'>{errors.comment}</p>}
                            </div>
                            <form id='make-comment-section'>
                                <textarea id='comment-writing-textarea'
                                    placeholder='Add a comment'
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment.trimStart()}
                                >
                                </textarea>
                                <button id='post-comment-btn' onClick={handlePostComment}><i class="fa-solid fa-paper-plane"></i></button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
