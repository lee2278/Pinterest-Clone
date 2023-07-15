import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createSaveThunk } from '../../store/saves';


export default function Card({ pin }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [cssClassName, setCssClassName] = useState('saving-btn')
    const [saved, setSaved] = useState('Save')

    const arrayOfPinIds = []

    const savePin = async (pinId) => {

        const newSave = {
            user_id: sessionUser.id,
            pin_id: pinId
        }
        
        arrayOfPinIds.push(pinId)
        setCssClassName('saving-btn2')
        setSaved('Saved')
        await dispatch(createSaveThunk(newSave))
    }
    
    
    return (
        <div key={pin.id} className='pin-card-frontpage'>

            <div className='saving-btn-wrapper'>
                {arrayOfPinIds.includes(pin.id) ? (
                    <button disabled id={cssClassName}
                    >{saved}</button>)
                    : (<button id={cssClassName} onClick={() => savePin(pin.id)}
                    >{saved}</button>)}

            </div>

            <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                <div className='card'>
                    <img id='pin-image' src={pin.image_url} alt='food' />
                </div>
            </Link>
        </div>
   )
}
