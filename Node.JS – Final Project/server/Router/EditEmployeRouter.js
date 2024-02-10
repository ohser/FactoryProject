const express = require("express");

const employeebll = require("../BLL/emploeebll");

const router = express.Router();

//entry point : http//localhost:3000/EditEmployee

router.get("/", async (req, res) => {
  try {
   
    const employee = await employeebll.getall();
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const numericId = parseInt(id, 10); 
      const employee = await employeebll.getEmployeeById(numericId);
      console.log(employee);
      res.send(employee);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

router.put("/:id", async (req, res) => {
  try {
    const obj = req.params;
    const results = await employeebll.updatEmployee(id, obj);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);r
     tcderswaq21    `   .`
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const results = await employeebll.deleteEmployee(id);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
