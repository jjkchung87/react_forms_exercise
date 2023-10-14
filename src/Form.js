import React, {useState} from 'react'

const Form = ({updateToDo, value, id, onEditSubmit}) => {

    const [inputValue, setInputValue] = useState(value)

    const handleInputChange = (e) => {
        const {value} = e.target
        setInputValue(value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id, inputValue)
        updateToDo({id, inputValue})
        onEditSubmit()

    }


    return (
        <form onSubmit={handleSubmit} className="Form">
            <label htmlFor="edit-input"></label>
            <input className="Form-input "type="text" value={inputValue} onChange={handleInputChange}/>
            <button>update</button>
        </form>
    )

}

export default Form