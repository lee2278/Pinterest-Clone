import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getBoardsThunk } from "../../store/boards";
import pinsReducer, { getPinsThunk } from "../../store/pins";
import OpenModalButton from "../OpenModalButton";
import CreateBoardModal from "./CreateBoardModal";
import "./ShowCollections.css"

export default function ShowCollections() {

    const dispatch = useDispatch()
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const sessionUser = useSelector(state => state.session.user);

    // const pinsObj = useSelector(state => state.pins.allPins)
    // const pinsList = Object.values(pinsObj)

    useEffect(() => {
        dispatch(getBoardsThunk())
        dispatch(getPinsThunk())
    }, [dispatch])

    console.log('boardsList', boardsList)

    return (
        <div className='overall-board-page-container'>

            <div className='center'>
            <Link id='created-pins-link' to={`/${sessionUser.username}/created`}>Created Pins</Link>
            <span>|</span>
            <p id='boards-ptag'>Boards</p>
            </div>
            <div id='create-board-btn-container'>
            <OpenModalButton
                buttonText="Create a New Board"
                modalComponent={<CreateBoardModal />}
            />
            </div>
            <div className='container-for-boards'>
                {boardsList.map((board) => (
                    <div key={board.id} className='board-card'>
                        <Link className='board-card-link' to={`/${sessionUser.username}/${board.name}`}>
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
