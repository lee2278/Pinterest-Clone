import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal"
import { editPinThunk } from "../../store/pins";

export default function EditModal({pin}) {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editPinThunk(pin))
        closeModal()
    }

    return(
        <div>
            <h1>Edit Pin</h1>
        </div>
    )

}
