const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
// });

const departmentSchema = new mongoose.Schema({
  name: String,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  startWorkYear: Number,
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
});

const shiftSchema = new mongoose.Schema({
  date: Date,
  startingHour: Number,
  endingHour: Number,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

const User = mongoose.model("User", userSchema);
const Department =mongoose.model("Department", departmentSchema);
const Employee =mongoose.model("Employee", employeeSchema);
const Shift =mongoose.model("Shift", shiftSchema);

// const arr = {
//     Department,
//     Employee,
//     Shift,}

//     module.exports=arr