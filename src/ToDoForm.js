import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const ToDoForm = ({addToDo}) => {

    const initialValue = ""
    const [input, setInput] = useState(initialValue)

    const changeInput = (evt) => {
        const {value} = evt.target
        setInput(value)
    }

    const submitForm = (evt) => {
        evt.preventDefault()
        addToDo(input)
        setInput(initialValue)
    }


    return (
        <div className = "ToDoForm">
            <form onSubmit={submitForm} >
                <label htmlFor="to-do">To-do:</label>
                <input type="text" name="to-do" placeholder="input no to-do" value={input} onChange={changeInput} />
                <button>Submit</button>
            </form>
        </div>
    )


}

export default ToDoForm