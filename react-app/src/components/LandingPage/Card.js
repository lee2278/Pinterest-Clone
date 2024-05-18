import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createSaveThunk } from '../../store/saves';
import { updatePinWithBoardsThunk } from '../../store/pins';

export default function Card({ pin }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [cssClassName, setCssClassName] = useState('saving-btn')
    const [buttonText, setButtonText] = useState('Save')

    const [dropdownClassName, setdropdownClassName] = useState('noshow')

    const [board, setBoard] = useState(null)
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const arrayOfPinIds = []

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
        if (buttonText === 'Save') {
            setButtonText('Saved')
            setCssClassName('saving-btn2')
        } else {
            setButtonText('Save')
            setCssClassName('saving-btn')
        }

        if (!board) {
            dispatch(createSaveThunk(newSave))
        } else {
            await dispatch(updatePinWithBoardsThunk(pinToUpdate))
            dispatch(createSaveThunk(newSave))
        }


    }


    const handleBoardSelect = (e) => {
        if (buttonText === 'Saved') {
            setButtonText('Save')
            setCssClassName('saving-btn')
        }
        setdropdownClassName('show')
        setBoard(e.target.value)
    }


    return (
        <div key={pin.id} className='pin-card-frontpage'>

            <div className='saving-btn-wrapper'>
                {arrayOfPinIds.includes(pin.id) ? (
                    <button disabled id={cssClassName}
                    >{buttonText}</button>)
                    : (<button id={cssClassName} onClick={() => savePin(pin.id)}
                    >{buttonText}</button>)}
                <form>
                    <select className={dropdownClassName}id='board-selector' defaultValue="" onChange={handleBoardSelect}>
                        <option value="" disabled hidden></option>
                        {boardsList.map((board) => (
                            <option key={board.id}
                                value={board.id}
                                >
                                {board.name}</option>
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
