import {useState} from 'react'

const Edit = (props) => {
  const [tasks, setTasks] = useState({...props.tasks})

  const handleChange = (event) => {
    setTasks({...tasks, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(tasks)
   }

  return(
    <>
      <details>
        <summary id='edit'>Edit Task</summary>
        <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name='title' onChange={handleChange} value={tasks.title}/>
                <br/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name='description' onChange={handleChange} value={tasks.description}/>
                <br/>
                <br/>
                <label htmlFor="completed">Completed: </label>
                <input type="checkbox" name='completed' onChange={handleChange} value={tasks.completed}/>
                <br/>
                <br/>
                <input id='submit' type="submit"/>
            </form>
      </details>
    </>
  )
}

export default Edit