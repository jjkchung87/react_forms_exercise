import React, {useState} from 'react'
import './ToDo.css'

const ToDo = ({id, value, complete, deleteToDo, updateToDo}) => {

    const [editStatus, setEditStatus] = useState(false)
    const [input, setInput] = useState(value)
    

    const handleOnClick = (evt) => {
        console.log(evt.target.parentNode.id)
        deleteToDo(evt.target.parentNode)
        evt.target.parentNode.parentNode.classList.add('fade-out')
    }

    const handleEditClick = () => (setEditStatus(!editStatus))

    const handleChange = (e) => {
        const {value} = e.target
        setInput(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateToDo(id, 'value',input)
        setEditStatus(false)
    }   

    const markComplete = () => {
        
        updateToDo(id, 'complete', !complete)
    } 
    
    return (
        <div className="ToDo" id={id}>
            <li className='ToDo-Value' style={{textDecoration: complete ? 'line-through' : 'None'}} >{value} </li>
            {!editStatus ? (
                <>
                <span className="ToDo-edit" onClick={handleEditClick}>edit</span>
                <span className="ToDo-delete" onClick={handleOnClick}>x</span>
                <button onClick={markComplete} >Mark as complete</button>
                </>
                ) : (
                    // <Form updateToDo={updateToDo} id={id} value={value} onEditSubmit={onEditSubmit}/>
                    <form onSubmit={handleSubmit}>
                        <input value={input} name="text" onChange={handleChange}/>
                        <button>Update</button>
                    </form>
                )
            }
        </div>
        
    )

}

export default ToDo