


const express = require('express');
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./configs/db');
const authRouter = require('./Router/authRouter');
const EmployesRouter = require('./Router/EmployeesRoute');
const userrouter = require('./Router/userRuote');
const shiftrouter = require('./Router/shiftRouter');
const EmployeesRoute = require('./Router/employeRouter');
const departmentRoute = require('./Router/departmentRoute');
const editEmployeeRouter = require('./Router/EditEmployeRouter');
const bodyParser = require('body-parser');
const actionRouter = require('./Router/actionRouter');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

connectDB();


app.use(
  session({
    secret: "my-token",
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 20}, 
  })
);




app.use('/auth', authRouter);
app.use('/Employes', EmployesRouter);
app.use('/user', userrouter);
app.use('/shift', shiftrouter);
app.use('/employe', EmployeesRoute);
app.use('/department', departmentRoute);
app.use('/EditEmployee', editEmployeeRouter);
app.use('/action', actionRouter);



    
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
