import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk } from '../../store/pins';
import OpenModalButton from "../OpenModalButton";
import EditModal from "./EditPinModal"
import DeleteModal from './DeletePinModal';
import FadeLoader from "react-spinners/FadeLoader"
import EditCommentModal from '../PinDetailsPage/EditCommentModal';
import { createCommentThunk, deleteCommentThunk, getCommentsThunk } from '../../store/comments';

export default function EditCreatedPins() {
    const { pinId } = useParams()
    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)
    const sessionUser = useSelector(state => state.session.user);
    const commentsObj = useSelector(state => state.comments.allComments)
    const commentsList = Object.values(commentsObj)
    const filteredCommentsByPinId = commentsList.filter(comment => comment.pin_id === +pinId)

    const [errors, setErrors] = useState({})
    const [comment, setComment] = useState('')



    const newComment = {
        user_id: sessionUser.id,
        pin_id: pin.id,
        comment
    }


    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
    }, [dispatch, pinId])


    const handleDeleteComment = (commentId) => {
        dispatch(deleteCommentThunk(commentId))
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

    const handleEnterKeyPress = async(e) => {
        if (e.key === 'Enter') {
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
    }


    return (
        <>
            <div className='main-container'>

                <div className='sub-main-container'>

                    <div className='pin-left-side'>
                        <div className='left-img-container'>
                            {!pin.image_url ? <FadeLoader /> :
                                <img id='specific-pin-img' src={pin.image_url} alt='created pins' />}
                        </div>
                    </div>


                    <div className='right-text-section2'>
                        
                        <div className='right-side-above-comments'>
                        <div className='edit-delete-btn-container'>
                            <div className='edit-btn-wrapper'>
                                <OpenModalButton
                                    buttonText="Edit"
                                    modalComponent={<EditModal pin={pin} />}
                                />
                            </div>
                            <div className='delete-btn-wrapper'>
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<DeleteModal pin={pin} />}
                                />
                            </div>
                        </div>
                        <h1 id='pin-title-h1'>{pin.title}</h1>
                        <p id='pin-description-ptag'>{pin.description}</p>


                        {!pin.owner_username ? <FadeLoader/> :<div id='posted-by-div'> Posted by:
                                <span id='pin-post-username-span'>{` ${pin.owner_username}`}</span>
                            </div>}
                            <h3 id='comments-h3'>Comments</h3>
                            {filteredCommentsByPinId.map((comment) => (
                                <div key={comment.id}>
                                <div className='comment-container'>
                                    <p id='username-ptag'>{comment.username}</p>
                                    <p id='comment-ptag'>{comment.comment}</p>
                                </div>
                                {comment.user_id === sessionUser.id && 
                                <>
                                <div className='edit-delete-btns-wrapper'>                       
                                <OpenModalButton
                                    buttonText="Edit"
                                    modalComponent={<EditCommentModal comment={comment} />}
                                />
                                <div id='delete-comment-btn' onClick={() => handleDeleteComment(comment.id)}>Delete</div>
                                </div>
                                </>}
                                </div>
                            ))}
                        
                        </div>
                        <div className='bottom-comment-area'>
                            <div className='num-comments-and-errors-section'>

                                <p id='num-comments-ptag'>{`${filteredCommentsByPinId.length} Comments`}</p>
                                {errors.comment && <span className='empty-comment-error'>{errors.comment}</span>}
                            </div>
                            <form id='make-comment-section'>
                                <textarea id='comment-writing-textarea'
                                    placeholder='Add a comment'
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment.trimStart()}
                                    onKeyPress={handleEnterKeyPress}
                                >
                                </textarea>
                                <button id='post-comment-btn' onClick={handlePostComment}><i className="fa-solid fa-paper-plane"></i></button>
                            </form>

                        </div>

                    </div>
                    
                    
                    


                </div>
            </div>
        </>
    )
}
