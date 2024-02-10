const express = require("express");
const departmentbll = require("../BLL/departmentbll");

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await departmentbll.getall();
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

    const results = await departmentbll.updateDepartment(id, obj);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    console.log(obj);
    const department = await departmentbll.addDepartment(obj);
    res.status(201).json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const department = await departmentbll.getDepartmentById(id);
    res.send(department);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const results = await departmentbll.deleteDepartment(id);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
