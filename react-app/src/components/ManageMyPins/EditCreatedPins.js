import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk } from '../../store/pins';
import OpenModalButton from "../OpenModalButton";
import EditModal from "./EditPinModal"

export default function EditCreatedPins() {
    const { pinId } = useParams()
    console.log('pinId', pinId)
    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    console.log('pin', pin)

    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
    }, [dispatch])


    return (
        <>
            <div className='main-container'>
                <img src={pin.image_url} />
                <div className='right-text-section'>
                    <p>{pin.title}</p>
                    <p>{pin.description}</p>
                    <OpenModalButton
                        buttonText="Edit"
                        // onItemClick={closeMenu}
                        modalComponent={<EditModal pin={pin} />}
                    />
                </div>
            </div>
        </>
    )
}
