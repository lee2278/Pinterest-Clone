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
    const userCreatedPins = pinsList.filter(pin => pin.owner_id === sessionUser.id)


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

    // return(
    //     <div className='everything-wrapper'>
    //         <h2>My created pins</h2>
    //         <Masonry
    //           breakpointCols={breakpointColumnsObj}
    //           className="second-masonry-grid"
    //           columnClassName="second-masonry-grid_column"
    //         >
    //             {userCreatedPins.map((pin) => (
    //                 <div key={pin.id}>
    //                     <Link id='pin-card-link' to={`/pins/${pin.id}/edit`}>
    //                         <div className='card'>
    //                             <img id='pin-image' src={pin.image_url} alt='food'/>
    //                         </div>
    //                     </Link>
    //                 </div>
    //             ))}
    //         </Masonry>
    //     </div>
    // )

    return (
        <div className='everything-wrapper'>
            <div className='user-info-area'>

                <p id='user-circle'>{sessionUser.username[0]}</p>

                <p id='username-ptag'>{sessionUser.username}</p>
            </div>

            <div className='center'>

                <div className='under-user-info-area'>
                    <Link className='created-pins-link selected' to={`/${sessionUser.username}/created`}>Created Pins</Link>
                    <Link className='boards-link' to={`/${sessionUser.username}`}>Boards</Link>
                </div>
            </div>

            <div className='container-for-created'>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="second-masonry-grid"
                    columnClassName="second-masonry-grid_column"
                >
                    {userCreatedPins.map((pin) => (
                        <div key={pin.id}>
                            <Link id='pin-card-link' to={`/pins/${pin.id}/edit`}>
                                <div className='card'>
                                    <img id='pin-image' src={pin.image_url} alt='food' />
                                </div>
                            </Link>
                        </div>
                    ))}
                </Masonry>
            </div>


        </div>
    )


}
