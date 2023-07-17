import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createSaveThunk } from '../../store/saves';
import { updatePinWithBoardsThunk } from '../../store/pins';

export default function Card({ pin }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    // const [cssClassName, setCssClassName] = useState('saving-btn')
    // const [saved, setSaved] = useState('Save')

    const savesObj = useSelector(state => state.saves.allSaves)
    const savesList = Object.values(savesObj)

    const [board, setBoard] = useState(null)
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const filteredSavesList = savesList.filter(save => save.user_id === sessionUser.id)
    // console.log('filtered', filteredSavesList)
 
    const arrayOfPinIds = []

    for (let filtered of filteredSavesList) {
        arrayOfPinIds.push(filtered.pin_id)
    }


    const savePin = async (pinId) => {

        const newSave = {
            user_id: sessionUser.id,
            pin_id: pinId
        }
        
        const pinToUpdate = {
            ...pin,
            boards: board
        }

        arrayOfPinIds.push(pinId)
        // setCssClassName('saving-btn2')
        // setSaved('Saved')

        if (!board) {
            dispatch(createSaveThunk(newSave))
        } else {
            await dispatch(updatePinWithBoardsThunk(pinToUpdate))
            dispatch(createSaveThunk(newSave))
        }


    }
    
    
    return (
        <div key={pin.id} className='pin-card-frontpage'>

            <div className='saving-btn-wrapper'>
                {arrayOfPinIds.includes(pin.id) ? (
                    <button disabled id='saving-btn2'
                    >Saved</button>)
                    : (<button id='saving-btn' onClick={() => savePin(pin.id)}
                    >Save</button>)}
                <form>
                    <select id='board-selector'defaultValue="" onChange={(e) => setBoard(e.target.value)}>
                        <option value="" disabled hidden></option>
                        {boardsList.map((board) => (
                            <option key={board.id} value={board.id}>{board.name}</option>
                        ))}
                    </select>
                </form>
            </div>

            <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                <div className='card'>
                    <img id='pin-image' src={pin.image_url} alt='food' />
                </div>
            </Link>
        </div>
   )
}
