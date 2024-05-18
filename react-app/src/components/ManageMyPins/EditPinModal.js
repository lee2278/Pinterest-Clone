import { useDispatch } from "react-redux";
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
    const [errors, setErrors] = useState({})

    const updatedPin = {
        ...pin,
        title,
        description,
    }


    useEffect(() => {
        dispatch(getBoardsThunk())
    }, [dispatch])


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
                <button id='save-edit-btn' onClick={handleEdit}>Save</button>
            </form>
        </div>
    )

}
