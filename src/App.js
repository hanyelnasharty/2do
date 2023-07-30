import { useState, useEffect  } from 'react'
import axios from 'axios'
import Tasks from './components/Tasks'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = () => {
    axios.get('https://localhost3000/tasks')
    .then((response) => setTasks(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    console.log(data)
    axios.post('https://localhost3000/tasks', data)
    .then((response) => {
      console.log(response)
      let newTasks = [...tasks, response.data]
      setTasks(newTasks)
    })
  }

  const handleDelete = (deletedTasks) => {
    axios.delete('https://localhost3000/tasks/' + deletedTasks._id)
    .then((response) => {
      let newTasks = tasks.filter((tasks) => {
        return tasks._id !== deletedTasks._id
      })
      setTasks(newTasks)
    })
  }

  const handleEdit = (data) => {
    axios.put('https://localhost3000/tasks/' + data._id, data)
    .then((response) => {
      let newTasks = setTasks.map((tasks) => {
        return tasks._id !== data._id ? tasks : data
      })
      setTasks(newTasks)
    })
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <nav>
        <Add handleCreate={handleCreate} />
      </nav>
      <div className='container'>
        {tasks.map((tasks) => {
          return (
            <>
              <div className='home'>
                <Tasks tasks={tasks} />
                <Edit tasks={tasks} handleEdit={handleEdit} />
                <button onClick={() => { handleDelete(tasks) }} className="delete">Delete</button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App