import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPinsThunk } from '../../store/pins';
import "./ShowPins.css"

export default function ShowPins() {
    const dispatch = useDispatch();
    const pinsObj = useSelector(state => state.pins.allPins)

    const pinsList = Object.values(pinsObj)

    useEffect(() => {
        dispatch(getPinsThunk())
    }, [dispatch])

    return (
        <div className='everything-wrapper'>
            <div className='pins-container'>
                {pinsList.map((pin) => (
                    <div key={pin.id} className='pin-card'>
                        <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                            <div className='card'>
                                <img id='pin-image' src={pin.image_url} alt='food'/>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

