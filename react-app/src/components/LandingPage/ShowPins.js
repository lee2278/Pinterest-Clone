import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPinsThunk } from '../../store/pins';
import { createBoardThunk } from "../../store/boards";


import Masonry from 'react-masonry-css'
import "./ShowPins.css"






export default function ShowPins() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)


    const pinsObj = useSelector(state => state.pins.allPins)

    const pinsList = Object.values(pinsObj)

    const boardsObj = useSelector(state => state.boards.allBoards)
    const boardsList = Object.values(boardsObj)

    const savesBoard = {
        name: "Saved Pins",
        description: "Here are all your saved pins",
        user_id: sessionUser.id
    }

    
    useEffect(() => {
        dispatch(getPinsThunk())
    }, [dispatch])
    
    const randomedArray = pinsList.sort((a,b) =>Math.random() - Math.random())
    
    
    // const checkIfSavesExist =() => {
    //     for (let board of boardsList) {
    //         if (board.name === 'Saved Pins') return true
    //     }
    //     return false
    // }

    // ORIGINAL
    // return (
    //     <div className='everything-wrapper'>
    //         <div className='pins-container'>
    //             {randomedArray.map((pin) => (
    //                 <div key={pin.id} className='pin-card'>
    //                     <Link id='pin-card-link' to={`/pins/${pin.id}`}>
    //                         <div className='card'>
    //                             <img id='pin-image' src={pin.image_url} alt='food'/>
    //                         </div>
    //                     </Link>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )


    // console.log(checkIfSavesExist())

    // if (checkIfSavesExist() === false) {
    //      dispatch(createBoardThunk(savesBoard))
    // }
 
    return (
        <div className='everything-wrapper'>
            <Masonry
              breakpointCols={6}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
                {randomedArray.map((pin) => (
                    <div key={pin.id} >
                        <Link id='pin-card-link' to={`/pins/${pin.id}`}>
                            <div className='card'>
                                <img id='pin-image' src={pin.image_url} alt='food'/>
                            </div>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </div>
    )

}
