const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5000
//cros 
app.use(cors())
const departments = require('./data/departments.json')
const doctorsdetails = require('./data/doctorsdetails.json');
app.get('/',(req, res)=>{
    res.send('Med-Center Server create by Md Ismail Hossen')
})
//departments 
app.get('/departments', (req, res)=>{
    res.send(departments)
})
app.get('/department/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const department = departments.find(d => d.id == id);
    
    res.send(department)
})
//match id
app.get('/doctor/:id', (req, res)=>{
    const id = req.params.id;
    const doctorsShidule = doctorsdetails.filter((d) => d.category_id == id);
    res.send(doctorsShidule)
})
app.listen(port, ()=>{
    console.log('Med-Center Server Running on Port', port)
})