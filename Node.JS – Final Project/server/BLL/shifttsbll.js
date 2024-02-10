const Shift = require('../model/shiftmodel')



const getall = async () =>
{
   return Shift.find()
}


const updatShift = async (id, obj) => {
   try {
      await Shift.findOneAndUpdate({ id: id }, obj); 
      console.log("Shift updated successfully");
      return "Updated";
    } catch (error) {
      console.error("Error updating Shift:", error);
      throw error;
    }
};



const addShift =async (obj) => {
   const shift = new Shift (obj)
   await shift.save()
   return 'Created'
 };
 

 const getShiftsById = async (id) => {
   try {
     const Shifts = await Shift.find();
     const shifts = Shifts.find((x) => x.id === +id);
     console.log(shifts);
     return shifts;
   } catch (error) {
     console.error(error);
     throw error;
   }
 };
module.exports ={getall,addShift,updatShift,getShiftsById}