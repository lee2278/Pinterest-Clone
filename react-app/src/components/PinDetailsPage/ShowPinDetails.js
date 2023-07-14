import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinDetailsThunk, updatePinWithBoardsThunk } from '../../store/pins';
import { getBoardsThunk } from '../../store/boards';
import { createSaveThunk } from '../../store/saves';
import "./ShowPinDetails.css"

export default function ShowPinDetails() {
    const { pinId } = useParams()
    const history = useHistory()

    const dispatch = useDispatch()

    const pin = useSelector(state => state.pins.singlePin)

    const sessionUser = useSelector(state => state.session.user);
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const [boardId, setBoardId] = useState(null)
    const [successfulSave, setSuccessfulSave] = useState(false)
    const [errors, setErrors] = useState({})

    const pinToUpdate = {
        ...pin,
        boards: boardId
    }

    const newSave = {
        user_id: sessionUser.id,
        pin_id: pin.id
    }



    useEffect(() => {
        dispatch(getPinDetailsThunk(pinId))
        dispatch(getBoardsThunk())
    }, [dispatch, pinId])


    const goBack = (e) => {
        e.preventDefault()
        history.push(`/${sessionUser.username}`)
    }



    const handleSave = async (e) => {
        e.preventDefault()

        // setErrors({})

        // const newErrors = {}

        // if (!boardId) newErrors.boardId = 'Please choose a board'

        // if (Object.values(newErrors).length) {
        //     setErrors(newErrors)
        //     return
        // }

        if (!boardId) {
            dispatch(createSaveThunk(newSave))
            setSuccessfulSave(true)
        } else {

            await dispatch(updatePinWithBoardsThunk(pinToUpdate))
            dispatch(getPinDetailsThunk(pinId))
            setSuccessfulSave(true)

        }

    }



    return (
        <>
            <div className='main-container'>
                <button id='go-back-btn' onClick={goBack}><span className="material-symbols-outlined">
                    undo
                </span>Go Back to Boards</button>
                <div className='sub-main-container'>
                    <div className='pin-left-side'>
                        <div className='left-img-container'>
                            <img id='specific-pin-img' src={pin.image_url} alt='' />
                        </div>
                    </div>
                    <div className='right-text-section'>
                        {errors.boardId && <p className='none-chosen-error'>{errors.boardId}</p>}
                        <form id='select-board-form'>
                            <select id='select-board-select' onChange={(e) => setBoardId(e.target.value)} onClick={(e) => setSuccessfulSave(false)} defaultValue="">
                                <option value="" disabled hidden>Choose Board</option>
                                {boardsList.map((board) => (
                                    <option key={board.id} value={board.id}>{board.name}</option>
                                ))}
                            </select>
                            <button id='save-pin-btn' onClick={handleSave}>Save</button>
                            {successfulSave && <p id='saved-ptag'>Saved!</p>}
                        </form>
                        <h1 id='pin-title-h1'>{pin.title}</h1>
                        <p id='pin-description-ptag'>{pin.description}</p>

                    </div>
                </div>
            </div>
        </>
    )
}
