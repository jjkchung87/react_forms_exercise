import React from 'react'
import "./Box.css"

const Box = ({color, width, height, deleteBox}) => {

    return (
        <>
        <div className="Box" style ={{backgroundColor: color, height: height, width: width}}></div>
        <span onClick={deleteBox} className="Box-delete">x</span>
        </>
        
    )


}

export default Box;