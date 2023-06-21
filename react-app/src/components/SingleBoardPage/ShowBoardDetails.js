import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBoardsThunk } from "../../store/boards";
import { getPinsThunk } from "../../store/pins";
import OpenModalButton from "../OpenModalButton";
import EditBoardModal from "./EditBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";
import Masonry from 'react-masonry-css'

import "./ShowBoardDetails.css"

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

    console.log('pinsList', pinsList)
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
            <p>{userBoard?.description}</p>
            <div className='edit-delete-board-btns-container'>
                <div className='edit-board-btn-wrapper'>
                    <OpenModalButton
                        buttonText="Edit Board"
                        modalComponent={<EditBoardModal board={userBoard} />}
                    />
                </div>
                <div className='delete-board-btn-wrapper'>
                    <OpenModalButton
                        buttonText="Delete Board"
                        modalComponent={<DeleteBoardModal board={userBoard} />}
                    />
                </div>
            </div>
            <Masonry
              breakpointCols={6}
              className="third-masonry-grid"
              columnClassName="third-masonry-grid_column"
            >
                {boardPinsArray.map((pin) => (
                    <div key={pin.id} className='pin-card'>
                        <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                            <div className='card'>
                                <img id='pin-image' src={pin.image_url} alt='food' />
                            </div>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </>
    )
}
