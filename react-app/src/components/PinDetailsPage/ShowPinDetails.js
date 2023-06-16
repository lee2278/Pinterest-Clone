import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk } from '../../store/pins';


export default function ShowPinDetails() {
    const { pinId } = useParams()
    console.log('pinId', pinId)
    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    console.log('pin', pin)

    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
    }, [dispatch, pinId])
    

    return(
        <>
        <div className='main-container'>
            <img src={pin.image_url} alt='selected upload' />
            <div className='right-text-section'>
                <p>{pin.title}</p>
                <p>{pin.description}</p>
            </div>
        </div>
        </>
    )
}
