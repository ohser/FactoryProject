const express = require('express')
const userbll = require('../BLL/usersBll')

const router = express.Router()

router.get('/',async (req,res) =>{
    try {
         const data = await userbll.getall();
         console.log(data);
         res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports=router