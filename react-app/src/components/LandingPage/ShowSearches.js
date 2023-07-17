import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPins } from '../../store/pins';
import { getPinsThunk } from '../../store/pins';
import Masonry from 'react-masonry-css'
import Card from './Card';


export default function ShowSearches() {

    const dispatch = useDispatch();

    const pinsObj = useSelector(state => state.pins.allPins)
    const pinsList = Object.values(pinsObj)

    const sessionUser = useSelector(state => state.session.user);



    const  searchInputObj  = useParams()
    const actualSearchText = searchInputObj.search.toLowerCase()

    useEffect(() => {
        dispatch(fetchPinsData(actualSearchText))
    }, [dispatch, actualSearchText])

    const fetchPinsData = (search) => async (dispatch) => {
        const response = await fetch(`/api/pins/search/${search}`)
    
        if (response.ok) {
            const data = await response.json();
            const matchedPins = data.matchedPins
            await dispatch(getPins(matchedPins))

    
        } else {
            const errors = await response.json()
            console.log('search fetch not ok')
            return errors;
        }
    }

    const breakpointColumnsObj = {
        default: 6,
        800: 5,
        650: 4,
        550: 3,
        475: 2,
        380: 1
      };


    return(
        <div className='everything-wrapper'>
            {pinsList.length ? <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {pinsList.map((pin) => (
                    <Card pin={pin} key={pin.id}/>
                ))}


            </Masonry>
            : <p id='not-found-ptag'>Sorry, we did not find any pins that matched your search.</p>
            }
        </div>
    )
}
