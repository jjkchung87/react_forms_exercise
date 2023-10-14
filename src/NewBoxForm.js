import React, {useState} from 'react'

const NewBoxForm = ({addBox}) => {

    const INITIALVALUES = {
        width:"",
        height: "",
        color: ""
    }
    const [formValues, setFormValues] = useState(INITIALVALUES)

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormValues(formValues => ({
            ...formValues,
            [name]: value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        addBox(formValues)
        setFormValues(INITIALVALUES);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="width">Width: </label>
            <input id="width" name="width" placeholder="width" value={formValues.width} onChange={onChange}/>
            <label htmlFor="height">Height: </label>
            <input id="height" name="height" placeholder="height" value={formValues.height} onChange={onChange}/>
            <label htmlFor="color">Color: </label>
            <input id="color" name="color" placeholder="color" value={formValues.color} onChange={onChange}/>
            <button>Submit</button>
        </form>
    )

}

export default NewBoxForm;