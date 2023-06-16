import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useModal } from "../../context/Modal"
import { editPinThunk, getPinsThunk } from "../../store/pins";
import './ManagePins.css'


export default function EditModal({ pin }) {

    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [title, setTitle] = useState(pin.title)
    const [description, setDescription] = useState(pin.description)


    const updatedPin = { ...pin, title, description }

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editPinThunk(updatedPin))
        // dispatch(getPinsThunk())
        closeModal()
    }

    return (
        <div>
            <h1 id='edit-pin-h1'>Edit Pin</h1>
            <form id= 'edit-pin-form'method="PUT">
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
                    >
                    </textarea>
                </label>
                <button onClick={handleEdit}>Save</button>
            </form>
        </div>
    )

}
