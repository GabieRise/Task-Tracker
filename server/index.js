const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({
    origin: "*",
}))

let task = []
app.get("/", (req,res)=> {
    res.send(task)
})
app.post("/addTask", (req, res)=>{
    const newTask = {
        id: req.body.id,
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder,
    }
    task.push(newTask)
})

const port = 7000
app.listen(port, ()=> {
    console.log(`server running on ${port}`)
})