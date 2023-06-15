import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";



export default function ShowCollections() {



    const sessionUser = useSelector(state => state.session.user);
    
    return(
        <>
            <Link to={`/${sessionUser.username}/created`}>Created</Link>
        </>
    )
}
