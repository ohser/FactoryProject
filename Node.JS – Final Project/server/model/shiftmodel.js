const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  id: Number ,
    date: String,
    startingHour:  String,
    endingHour: String, 
  });
  
  const Shift = mongoose.model('shift', shiftSchema);

module.exports= Shift

// employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],