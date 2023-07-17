import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getBoardsThunk } from "../../store/boards";
import { getPinsThunk } from "../../store/pins";
import OpenModalButton from "../OpenModalButton";
import CreateBoardModal from "./CreateBoardModal";
import { getSavesThunk } from "../../store/saves";
import "./ShowCollections.css"

export default function ShowCollections() {

    const dispatch = useDispatch()
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const sessionUser = useSelector(state => state.session.user);

    const pinsObj = useSelector(state => state.pins.allPins)
    const pinsList = Object.values(pinsObj)

    const savedPinsList = [];
    const arrayOfPinIds = [];

    const savesObj = useSelector(state => state.saves.allSaves)
    const savesList = Object.values(savesObj)
    const filteredSavesByUser = savesList.filter(save => save.user_id === sessionUser.id)

    for (let i = 0; i < filteredSavesByUser.length; i++) {
        arrayOfPinIds.push(filteredSavesByUser[i].pin_id)
    }

    for (let pin of pinsList) {
        if (arrayOfPinIds.includes(pin.id)) {
            savedPinsList.push(pin)
        }
    }

    useEffect(() => {
        dispatch(getBoardsThunk())
        dispatch(getPinsThunk())
        dispatch(getSavesThunk())
    }, [dispatch])

    // console.log('boardsList', boardsList)

    return (
        <div className='everything-wrapper'>
            <div className='user-info-area'>

                <p id='user-circle'>{sessionUser.username[0]}</p>

                <p id='username-ptag'>{sessionUser.username}</p>
            </div>

            <div className='center'>

                <div className='under-user-info-area'>
                    <Link id='created-pins-link' to={`/${sessionUser.username}/created`}>Created Pins</Link>
                    <Link className='boards-link selected' to={`/${sessionUser.username}`}>Boards</Link>
                </div>
            </div>
            <div id='create-board-btn-container'>
                <OpenModalButton
                    buttonText="Create a New Board"
                    modalComponent={<CreateBoardModal />}
                />
            </div>

            <div className='container-for-boards'>
                <div className='saved-card'>
                    <Link className='saved-card-link' to={`/${sessionUser.username}/saved`}>
                        <div className='saved-images'>
                            <img className='saveImageDiv img-1' src={savedPinsList[0]?.image_url} />
                            <img className='saveImageDiv img-2' src={savedPinsList[1]?.image_url} />
                            <img className='saveImageDiv img-3' src={savedPinsList[2]?.image_url} />
                            <img className='saveImageDiv img-4' src={savedPinsList[3]?.image_url} />

                        </div>
                    </Link>
                    <div className='text-section'>
                        <p className='saved-ptag'>Saved Pins</p>
                    </div>
                </div>
                {boardsList.map((board) => (
                    <div key={board.id} className='board-card'>
                        <Link className='board-card-link' to={`/${sessionUser.username}/boards/${board.id}`}>
                            <div className='pic-collage'>
                                <img alt='' className='pin-image-1' src={board?.pins[0]?.image_url} />
                                <img alt='' className='pin-image-2' src={board?.pins[1]?.image_url} />
                                <img alt='' className='pin-image-3' src={board?.pins[2]?.image_url} />
                            </div>
                        </Link>
                        <div className='text-section'>
                            <p className='board-name-ptag'>{board.name}</p>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
