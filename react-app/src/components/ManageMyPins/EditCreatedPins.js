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

                <div className={pin.description?.length < 1280 ? 'sub-main-container' : 'extended-sub-main-container'}>

                    <div className='pin-left-side'>
                        <div className={pin.description?.length < 1280 ? 'left-img-container' : 'left-img-container-extended'}>
                            {pin &&
                                <img id='specific-pin-img'src={pin.image_url} alt='created pins' />}
                        </div>
                    </div>


                    {pin && <div className='right-text-section'>
                        <h1 id='pin-title-h1'>{pin.title}</h1>
                        <p id='pin-description-ptag'>{pin.description}</p>
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
            </div>
        </>
    )
}
