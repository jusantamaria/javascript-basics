const express = require ('express')
const mongoose = require('mongoose')
const user = require ('./controller')
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://julikq22:Quilmes5@cluster0.2iicrge.mongodb.net/?retryWrites=true&w=majority')


app.get('/users', user.list)
app.get('/users/:id', user.get)
app.post('/users', user.create)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)


app.use(express.static('basics/api/app'))

app.get('/', (req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})

app.get('*',(req,res)=>{
    res.status(404).send('Esta página no existe')
})

app.listen(port, ()=>{
    console.log('Arrancando la App')
})