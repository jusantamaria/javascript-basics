const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://julikq22:Quilmes5@cluster0.2iicrge.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Usuario 2', edad: ' 17'})
    const savedUser = await user.save()
    console.log(savedUser)
}

// crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

// buscarTodo()

const buscar = async () => {
    const user = await User.find({username: 'Usuario 1'})
    console.log(user)
}

// buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: 'Usuario 2'})
    console.log(user)
}

// buscarUno()

const actualizar = async ()=>{
    const user = await User.findOne({username:'Usuario 1'})
    console.log(user)
    user.edad = 22
    await user.save()
}

// actualizar()

const eliminar = async () =>{
    const user = await User.findOne({username: 'Usuario 1'})
    console.log(user)
    if (user) {
        await user.remove()
    }
}

// eliminar()