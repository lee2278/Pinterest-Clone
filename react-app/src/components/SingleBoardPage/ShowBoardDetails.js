 import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletePinsFromBoardThunk, getBoardsThunk } from "../../store/boards";
import { getPinsThunk } from "../../store/pins";
import OpenModalButton from "../OpenModalButton";
import EditBoardModal from "./EditBoardModal";
import DeleteBoardModal from "./DeleteBoardModal";
import Masonry from 'react-masonry-css'

import "./ShowBoardDetails.css"

export default function ShowBoardDetails() {

    const dispatch = useDispatch()

    const { boardId } = useParams()

    const sessionUser = useSelector(state => state.session.user);

    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    //getting a board owned by the user and by board id
    const userBoardArray = boardsList.filter(board => board.user_id === sessionUser?.id && board?.id === parseInt(boardId))

    const userBoard = userBoardArray[0]

    const handleDelete = (pinId) => {
        dispatch(deletePinsFromBoardThunk(+boardId, pinId))
    }

    useEffect(() => {
        dispatch(getBoardsThunk())
        dispatch(getPinsThunk())
    }, [dispatch])

    const breakpointColumnsObj = {
        default: 6,
        800: 5,
        650: 4,
        550: 3,
        475: 2,
        380: 1
      };

    return (
        <div className='everything-wrapper'>

            <h1>{userBoard?.name}</h1>
            <div className='board-description-wrapper'>
            <p id='board-description-ptag'>{userBoard?.description}</p>
            </div>
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
                breakpointCols={breakpointColumnsObj}
                className="third-masonry-grid"
                columnClassName="third-masonry-grid_column"
            >
                {userBoard?.pins.map((pin) => (
                    <div key={pin.id} className='pin-card'>
                        <div className='remove-btn-wrapper'>
                        <button id='remove-pin-btn' onClick={() => handleDelete(pin.id)}><i className="fa-solid fa-xmark"></i></button>
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
