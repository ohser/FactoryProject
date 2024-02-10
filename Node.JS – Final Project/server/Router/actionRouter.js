const express = require("express");
const action = require('../DAL/actionFileDal')

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const data = await action.getallAction();
      console.log(data);
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  });



  router.put('/:id', async (req, res) => {
    try {
      const obj = req.body;
      console.log(obj);
      const { id } = req.body;
      console.log(id);
  
      const numericId = parseInt(id, 10);
  
      const results = await action.updateuser(numericId, obj);
      res.send(results);
    } catch (error) {
      res.status(500).send(error);
    }
  });



  module.exports = router;
