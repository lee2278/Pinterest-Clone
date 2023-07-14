import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPinsThunk } from '../../store/pins';
import { createSaveThunk } from '../../store/saves';
import { getSavesThunk } from '../../store/saves';
import Card from './Card';

import Masonry from 'react-masonry-css'
import "./ShowPins.css"


export default function ShowPins() {
    const dispatch = useDispatch();

    const pinsObj = useSelector(state => state.pins.allPins)
    const pinsList = Object.values(pinsObj)

    const sessionUser = useSelector(state => state.session.user);

    // const savesObj = useSelector(state => state.saves.allSaves)
    // const savesList = Object.values(savesObj)


    useEffect(() => {
        dispatch(getPinsThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getSavesThunk())
    }, [dispatch])

    // const arrayOfPinIds = [];
    // for (let i = 0; i < savesList.length; i++) {
    //     arrayOfPinIds.push(savesList[i].pin_id)
    // }

    const randomedArray = pinsList.sort((a, b) => Math.random() - Math.random())


   


    // ORIGINAL
    // return (
    //     <div className='everything-wrapper'>
    //         <div className='pins-container'>
    //             {randomedArray.map((pin) => (
    //                 <div key={pin.id} className='pin-card'>
    //                     <Link id='pin-card-link' to={`/pins/${pin.id}`}>
    //                         <div className='card'>
    //                             <img id='pin-image' src={pin.image_url} alt='food'/>
    //                         </div>
    //                     </Link>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )

    const arrayOfPinIds = []

    const savePin = async (pinId) => {

        const newSave = {
            user_id: sessionUser.id,
            pin_id: pinId
        }
        
        arrayOfPinIds.push(pinId)
        await dispatch(createSaveThunk(newSave))
    }




    return (
        <div className='everything-wrapper'>
            <Masonry
                breakpointCols={6}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {randomedArray.map((pin) => (
                    <Card pin={pin}/>
                    // <div key={pin.id} className='pin-card-frontpage'>

                    //     <div className='saving-btn-wrapper'>
                    //         {arrayOfPinIds.includes(pin.id) ? (
                    //             <button disabled id={clicked} 
                    //             >Saved</button>)
                    //             : (<button id={clicked} onClick={() => savePin(pin.id)}
                    //             >Save</button>)}
     
                    //     </div>

                    //     <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                    //         <div className='card'>
                    //             <img id='pin-image' src={pin.image_url} alt='food' />
                    //         </div>
                    //     </Link>
                    // </div>
                ))}
            </Masonry>
        </div>
    )

}
