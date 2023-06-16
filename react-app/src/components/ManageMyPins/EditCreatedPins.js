import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk } from '../../store/pins';
import OpenModalButton from "../OpenModalButton";
import EditModal from "./EditPinModal"
import DeleteModal from './DeletePinModal';

export default function EditCreatedPins() {
    const { pinId } = useParams()
    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
    }, [dispatch, pinId])


    return (
        <>
            <div className='main-container'>
                {pin && <img src={pin.image_url} alt='created pins'/>}
                {pin && <div className='right-text-section'>
                    <p>{pin.title}</p>
                    <p>{pin.description}</p>
                    <OpenModalButton
                        buttonText="Edit"
                        modalComponent={<EditModal pin={pin} />}
                    />
                    <OpenModalButton
                        buttonText="Delete"
                        modalComponent={<DeleteModal pin={pin} />}
                    />
                </div>}
            </div>
        </>
    )
}
