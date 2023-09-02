import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import axios from "axios"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
// unable to fetch daata from server for now
//   useEffect(() =>{
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks()  
//       setTasks(tasksFromServer)
//     }
    
//     getTasks()
//   }, [])

// // Fetch Task
// const fetchTasks =  () => {
//   const url =  'https://localhost:5000/tasks'
//   axios.get(url)
//   .then((data)=> {
//     console.log(data)


//   })

//   .catch((err)=> {
//     console.log(err)
//   })
//   return data
// }
// ADD task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task }
  const url =  'https://localhost:7000/addTask'
  axios.post(url, newTask)
  .then((data)=> {
    console.log(data)


  })

  .catch((err)=> {
    console.log(err)
  })
}

// // delete task
// const deleteTask = (id) => {
//   setTasks(tasks.filter((task)=> task.id !== id))
// }

// // toggle reminder
// const toggleReminder = (id) => {
//   setTasks(
//     tasks.map ((task) => 
//     task.id === id ? { ...task, reminder: 
//       !task.reminder } : task 
//     )
//   )
// }

  return (
    <>
      <div className='container'>
        <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd ={showAddTask}/>
        {showAddTask && <AddTask onAdd = {addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : (
          'No Tasks To Show'
          )
        }
      </div>
      
      
    </>
  )
}

export default App
