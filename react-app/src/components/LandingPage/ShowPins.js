import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


export default function ShowPins() {
    const dispatch = useDispatch();
    const pinsObj = useSelector(state => state.pins.allPins)


    return(
        <>
        </>
    )
}
