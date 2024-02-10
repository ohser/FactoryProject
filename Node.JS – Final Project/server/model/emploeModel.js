const mongoose = require("mongoose");
const { Schema } = mongoose;


const employeeSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
  startWorkYear: { type: Number, required: true },
  FullName: { type: String, required: true },
  departmentId: { type: Number, required: true },
  id: { type: Number, required: true },
  shift: { type: Number, required: true },
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
