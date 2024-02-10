const express = require('express')
const shiftbll = require('../BLL/shifttsbll')


const router = express.Router()

router.get('/',async (req,res) =>{
    try {
         const data = await shiftbll.getall();
         console.log(data);
         res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})



router.post('/', async (req, res) => {
    try {
        const obj = req.body;
        console.log(obj);
        const shift = await shiftbll.addShift(obj);
        res.status(201).json(shift); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });  
    }
  });



  router.put('/:id', async (req, res) => {
    try {
      const obj = req.body;
      console.log(obj);
      const { id } = req.body;
      console.log(id);
  
      const numericId = parseInt(id, 10);
  
      const results = await shiftbll.updatShift(numericId, obj);
      res.send(results);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const shift = await shiftbll.getShiftsById(id);
      res.send(shift);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports=router