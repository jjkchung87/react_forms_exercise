import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import {v4 as uuid} from 'uuid'


const BoxList = () => {

    const [boxes, setBoxes] = useState([{color:'red', height: '20px', width: '20px', id: uuid()}])

    const addBox = ({width, height, color}) => {
        setBoxes(boxes => ([...boxes,{width, height, color, id: uuid()}]))
    }

    const deleteBox = (deletedBox) => {
        setBoxes(boxes => (boxes.filter(box => box.id !== deletedBox.id)))
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => <Box 
                                color={box.color} 
                                height={box.height} 
                                width={box.width} 
                                id={box.id} 
                                key={box.id} 
                                deleteBox={() => deleteBox(box)}
                                />)} 
        </div>
        
    )

}

export default BoxList;