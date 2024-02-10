const Department = require("../model/departmentModel");
const mongoose = require("mongoose");


const getDepartmentById = async (id) => {
  try {
    const departments = await Department.find();
    const department = departments.find((x) => x.id === +id);
    console.log(department);
    return department;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateDepartment = async (id, obj) => {


   await Department.findOneAndUpdate({ id: id },obj);
   

 };






const deleteDepartment = async (id) => {
  try {
    await Department.findOneAndDelete({ id: id });
    return "deleted";
  } catch (error) {
    console.error("Error deleting Department:", error);
    throw error;
  }
};

const getall = async () => {
  return Department.find();
};

const addDepartment = async (obj) => {
  const department = new Department(obj);
  await department.save();
  return "Created";
};

module.exports ={getall,addDepartment,getDepartmentById,deleteDepartment,updateDepartment}
