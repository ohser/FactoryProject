const Employee = require("../model/emploeModel");



const getall = () => {
  return Employee.find();
};

const getEmployeeById = async (id) => {
   try {
      const employee = await Employee.findOne({ id: id.toString() });
      console.log(employee);
      return employee;
    } catch (error) {
      console.error(error);
      throw error;
    }
};



const addEmployee =async (obj) => {
  const Employe = new Employee (obj)
  await Employe.save()
  return 'Created'
};


const updatEmployee = async (id, obj) => {
   try {
      await Employee.findOneAndUpdate({ id: id }, obj); 
      console.log("Employee updated successfully");
      return "Updated";
    } catch (error) {
      console.error("Error updating employee:", error);
      throw error;
    }
};

const deleteEmployee = async (id) => {
   try {
  await Employee.findOneAndDelete({ _id: id });
  return "deleted";
} catch (error) {
   console.error("Error deleting employee:", error);
   throw error;
 }
};
module.exports = { addEmployee,getall, deleteEmployee, updatEmployee, getEmployeeById };
