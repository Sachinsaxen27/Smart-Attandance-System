const connectToMongos=require("./db");
connectToMongos()
const express=require('express')
var cors = require('cors')


const app =express()
const port=5000

app.use(cors(({ origin: 'http://localhost:3000', credentials: true })))

app.use(express.json({limit:"10mb",extended:true}))
app.use(express.urlencoded({limit:"10mb",extended:true,parameterLimit:50000}))


app.use('/api/user',require('./user/admin'))
app.use('/api/student',require('./user/student'))
app.use('/api/attendance',require('./user/SAttendance'))
app.listen(port,()=>{
  console.log(`Attendance  app listening on http://localhost:${port}`)
})

