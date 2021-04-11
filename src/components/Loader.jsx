import React from 'react'
import {Default} from "react-spinners-css";

export default function Loader() {
    return (
        <div style={{marginTop: "5vh"}}>
            <Default size={100} color="#ffffff"/>
            <h2 style={{color: "rgb(230,230,230)"}}>Loading...</h2>
        </div>
    )
}
