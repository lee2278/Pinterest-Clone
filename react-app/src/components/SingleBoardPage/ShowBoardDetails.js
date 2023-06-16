import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getBoardDetailsThunk, getBoardsThunk } from "../../store/boards";
import { getPinsThunk } from "../../store/pins";
import OpenModalButton from "../OpenModalButton";
import EditBoardModal from "./EditBoardModal";

export default function ShowBoardDetails() {

    const dispatch = useDispatch()
    const { boardName } = useParams()

    const sessionUser = useSelector(state => state.session.user);

    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    //getting a board owned by the user and by board name
    const userBoardArray = boardsList.filter(board => board.user_id === sessionUser?.id && board?.name === boardName)

    const userBoard = userBoardArray[0]


    //filtering for pins of this board
    const pinsObj = useSelector(state => state.pins.allPins)
    const pinsList = Object.values(pinsObj)

    const boardPinsArray = pinsList.filter(pin => pin?.board_id === userBoard?.id)

    console.log('boardPinsArray', boardPinsArray)


    useEffect(() => {
        dispatch(getBoardsThunk())
        // dispatch(getBoardDetailsThunk(userBoard?.id))
        dispatch(getPinsThunk())
    }, [dispatch])

    return (
        <>
            <h1>{userBoard?.name}</h1>
            <OpenModalButton
                buttonText="Edit Board"
                modalComponent={<EditBoardModal board={userBoard} />}
            />
            {/* <OpenModalButton
                buttonText="Delete"
                modalComponent={<DeleteBoardModal board={userBoard} />}
            /> */}
            <div className='pins-container'>
                {boardPinsArray.map((pin) => (
                    <div key={pin.id} className='pin-card'>
                        <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                            <div className='card'>
                                <img id='pin-image' src={pin.image_url} alt='food' />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
