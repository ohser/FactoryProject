const user = require('../model/userModel')


const getall = async () =>
{
   return user.find()
}

module.exports ={getall}