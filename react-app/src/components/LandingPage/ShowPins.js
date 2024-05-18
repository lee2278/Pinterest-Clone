import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinsThunk } from '../../store/pins';
import { getSavesThunk } from '../../store/saves';
import Card from './Card';

import Masonry from 'react-masonry-css'
import "./ShowPins.css"
import { getBoardsThunk } from '../../store/boards';
import FadeLoader from "react-spinners/FadeLoader"


export default function ShowPins() {
    const dispatch = useDispatch();

    const pinsObj = useSelector(state => state.pins.allPins)
    const pinsList = Object.values(pinsObj)

    useEffect(() => {
        dispatch(getPinsThunk())
        dispatch(getBoardsThunk())
 
    }, [dispatch])

    useEffect(() => {
        dispatch(getSavesThunk())
    }, [dispatch])

    const randomedArray = pinsList.sort((a, b) => Math.random() - Math.random())

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
            {!pinsList.length ? <FadeLoader/>
            :
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {randomedArray.map((pin) => (
                    <Card pin={pin} key={pin.id}/>
                ))}
            </Masonry>
}
        </div>
    )

}
