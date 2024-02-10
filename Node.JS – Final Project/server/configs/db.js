const mongoose = require('mongoose')

const connectDB = () =>
{
  mongoose.connect('mongodb://127.0.0.1:27017/projectDB')
  .then(()=> console.log('Connetcted projectDB'))
  .catch((error)=>console.log(error))
}

module.exports = connectDB;