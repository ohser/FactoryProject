const express = require("express");
const jwt = require("jsonwebtoken");
const employeebll = require('../BLL/emploeebll')
const session = require('express-session');
const router = express.Router();
// const app = express();






//entry point : http//localhost:3000/Employes

router.get('/', (req, res) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "Authorization failed. Invalid token." });
}

  const ACCESS_SECRET_TOKEN = "someKey";

  jwt.verify(token, ACCESS_SECRET_TOKEN, (err, data) => {
    if (err) {
      res.status(500).send("Fail to authenticate token");
    }

    // console.log(data);
    res.send(data);
  });

});



router.get('/em', async (req, res) => {
  try {
    const employees = await employeebll.getall();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});



router.get('/views', (req, res) => {
  console.log(req.session.views)
  if(req.session.views ){
    // console.log(req.session.views)

    req.session.views++
    req.session.save()
    res.send( JSON.stringify(`You visited this page ${req.session.views} time`))
   } else {
    req.session.views = 1
    console.log(req.session.views)
    req.session.save()
    console.log(req.session.views)
    res.send( JSON.stringify(`You visited this page ${req.session.views} time`))
    
   }
   console.log(req.session.views)
  });







// router.get('/user', (req, res) => {
//   res.send(`
//     <h1>Your views: ${req.session.views}</h1>
//     <a href='/logout'>Logout</a>
//   `);
// });

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const employee = await employeebll.getEmployeeById(id);
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
