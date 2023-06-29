const express = require ('express')
const mongoose = require('mongoose')
const user = require ('./controller')
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://julikq22:Quilmes5@cluster0.2iicrge.mongodb.net/?retryWrites=true&w=majority')


app.get('/', user.list)
app.get('/:id', user.get)
app.post('/', user.create)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*',(req,res)=>{
    res.status(404).send('Esta página no existe')
})

app.listen(port, ()=>{
    console.log('Arrancando la App')
})