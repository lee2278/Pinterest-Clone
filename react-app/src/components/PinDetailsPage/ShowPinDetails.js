import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk } from '../../store/pins';
import "./ShowPinDetails.css"

export default function ShowPinDetails() {
    const { pinId } = useParams()
    console.log('pinId', pinId)
    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    console.log('pin', pin)

    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
    }, [dispatch, pinId])


    return (
        <>
            <div className='main-container'>
                <div className='sub-main-container'>
                    <div className='pin-left-side'>
                        <div className='left-img-container'>
                    <img id='specific-pin-img' src={pin.image_url} alt='' />
                    </div>
                    </div>
                    <div className='right-text-section'>
                        <h1 id='pin-title-h1'>{pin.title}</h1>
                        <p id='pin-description-ptag'>{pin.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
