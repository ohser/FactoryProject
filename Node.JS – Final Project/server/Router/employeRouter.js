const express = require("express");
const emploeebll = require("../BLL/emploeebll");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await emploeebll.getall();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await emploeebll.getEmployeeById(id);
    console.log(employee);
    res.send(employee);
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

    const results = await emploeebll.updatEmployee(numericId, obj);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post('/', async (req, res) => {
  try {
      const obj = req.body;
      console.log(obj);
      const Employee = await emploeebll.addEmployee(obj);
      res.status(201).json(Employee); 
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });  
  }
});


router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const numericId = parseInt(id, 10); 
      const result = await emploeebll.deleteEmployee(numericId);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
