import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinsThunk } from '../../store/pins';
import { getSavesThunk } from '../../store/saves';
import { deleteSaveThunk } from '../../store/saves';
import Masonry from 'react-masonry-css'
import "./ShowSavedPins.css"

export default function ShowSavedPins() {
    const dispatch = useDispatch();

    const pinsObj = useSelector(state => state.pins.allPins)
    const pinsList = Object.values(pinsObj)

    const savedPinsList = [];
    const arrayOfPinIds = [];

    const savesObj = useSelector(state => state.saves.allSaves)

    // this is a list of save objects
    const savesList = Object.values(savesObj)

    useEffect(() => {
        dispatch(getPinsThunk())
    }, [dispatch])


    useEffect(() => {
        dispatch(getSavesThunk())
    }, [dispatch])


    // getting an array of just pinIds
    for (let i = 0; i < savesList.length; i++) {
        arrayOfPinIds.push(savesList[i].pin_id)
    }


    // getting a list of savedPins
    for (let pin of pinsList) {
        if (arrayOfPinIds.includes(pin.id)) {
            savedPinsList.push(pin)
        }
    }




    const handleDeleteSave = (pinId) => {
        const savesToDelete = savesList.filter(save => save.pin_id === pinId)
        
        savesToDelete.forEach(save => {
            dispatch(deleteSaveThunk(save.id))
        })

    }


    return (
        <div className='everything-wrapper'>
            <h2>My saved pins</h2>
            <Masonry
                breakpointCols={6}
                className="second-masonry-grid"
                columnClassName="second-masonry-grid_column"
            >
                {savedPinsList.map((pin) => (
                    <div key={pin.id} className='pin-card'>
                        <div className='remove-btn-wrapper'>
                            <button id='remove-pin-btn' onClick={() => handleDeleteSave(pin.id)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                            <div className='card'>
                                <img id='pin-image' src={pin.image_url} alt='food' />
                            </div>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </div>
    )
}
