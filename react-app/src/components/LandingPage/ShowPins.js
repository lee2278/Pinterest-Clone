import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPinsThunk } from '../../store/pins';
import Masonry from 'react-masonry-css'
import "./ShowPins.css"


export default function ShowPins() {
    const dispatch = useDispatch();
    const pinsObj = useSelector(state => state.pins.allPins)

    const pinsList = Object.values(pinsObj)

    useEffect(() => {
        dispatch(getPinsThunk())
    }, [dispatch])

   const randomedArray = pinsList.sort((a,b) =>Math.random() - Math.random())



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
                            <div>
                                <img id='pin-image' src={pin.image_url} alt='food'/>
                            </div>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </div>
    )

}
