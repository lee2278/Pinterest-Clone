import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinsThunk } from '../../store/pins';
import Masonry from 'react-masonry-css'

export default function ShowCreatedPins() {
    const dispatch = useDispatch();
    const pinsObj = useSelector(state => state.pins.allPins)
    const sessionUser = useSelector(state => state.session.user);

    const pinsList = Object.values(pinsObj)
    const userCreatedPins = pinsList.filter(pin => pin.owner_id === sessionUser.id )


    useEffect(() => {
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

    return(
        <div className='everything-wrapper'>
            <h2>My created pins</h2>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="second-masonry-grid"
              columnClassName="second-masonry-grid_column"
            >
                {userCreatedPins.map((pin) => (
                    <div key={pin.id}>
                        <Link id='pin-card-link' to={`/pins/${pin.id}/edit`}>
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
