import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPinsThunk } from '../../store/pins';

export default function ShowPins() {
    const dispatch = useDispatch();
    const pinsObj = useSelector(state => state.pins.allPins)

    console.log('pinsObj', pinsObj)

    useEffect(() => {
        dispatch(getPinsThunk())
    }, [dispatch])

    return(
        <>
        <h1>test</h1>
        </>
    )
}
