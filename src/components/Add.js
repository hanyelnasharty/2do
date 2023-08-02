import { useState } from 'react'

const Add = (props) => {
    const [tasks, setTasks] = useState({title: '', description: '', completed: {Boolean}, createdAt: {Date}, updatedAt: {Date},})


    const handleChange = (event) => {
        setTasks({...tasks, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(tasks)
    }




    return (
        <>
        <details id='add'>
            <summary className='add'>Add Tasks</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name='title' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name='description' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="completed">Completed: </label>
                <input type="checkbox" name='completed' defaultChecked onChange={handleChange} />
                <br/>
                <br/>
                <input type="submit"/>
            </form>
            </details>
        </>
    )
}

export default Add