import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getBoardsThunk } from "../../store/boards";



export default function ShowCollections() {

    const dispatch = useDispatch()
    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    useEffect(() => {
        dispatch(getBoardsThunk())
    },[dispatch])

    const sessionUser = useSelector(state => state.session.user);
    
    return(
        <>
            <Link to={`/${sessionUser.username}/created`}>Created</Link>
            <h2>this is where boards go</h2>
            {boardsList.map((board) => (
                <div key={board.id} className='board-card'>
                    <Link to={`/${sessionUser.username}/${board.name}`}>
                        <div className='card-wrapper'>
                            <p>{board.name}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}
