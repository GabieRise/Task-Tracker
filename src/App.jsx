import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: false, 
    },
    {
        id: 2,
        text: 'Church Meeting',
        day: 'Feb 6th at 12:00pm',
        remainder: true,
    },
    {
        id: 3,
        text: 'Clothes shopping',
        day: 'Feb 7th at 1:30pm',
        remainder: true,
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <>
      <div className='container'>
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  /> : (
          'No Tasks To Show'
          )
        }
      </div>
      
      
    </>
  )
}

export default App
