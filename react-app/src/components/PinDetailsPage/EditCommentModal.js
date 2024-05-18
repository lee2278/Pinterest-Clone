import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal"
import { editCommentThunk } from "../../store/comments";
import { getCommentsThunk } from "../../store/comments";
import "./EditCommentModal.css"

export default function EditCommentModal({ comment }) {

    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [updatedCommentText, setUpdatedCommentText] = useState(comment.comment)


    const updatedComment = {
        ...comment,
        comment: updatedCommentText
    }

    const handleEdit =  async (e) => {
        e.preventDefault()

        await dispatch(editCommentThunk(updatedComment))
        dispatch(getCommentsThunk())
        closeModal()
    }

    return(
        <div>
            <h1 id='edit-comment-h1'>Edit Comment</h1>
            <div className='edit-comment-errors-container'>
            </div>
            <form id='edit-comment-form' method="PUT">

                <label id='comment-label-and-area'>Comment
                    <textarea className='edit-comment-inputs'
                        value={updatedCommentText.trimStart()}
                        onChange={(e) => setUpdatedCommentText(e.target.value)}
                        placeholder="Reply"
                        rows='5'
                    >
                    </textarea>
                </label>
                <button id='save-edit-btn' onClick={handleEdit}>Save</button>
            </form>
        </div>
    )
}
