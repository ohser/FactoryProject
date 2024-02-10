const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  id : Number,
  name:  String,
  manager:  String,
});

const Department = mongoose.model('department', departmentSchema);

module.exports = Department;

