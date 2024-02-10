const jf =require('jsonfile')

const file = 'data/actionFile.json'


const getallAction= async ()  => 
{
    const arr =  await jf.readFile(file);
    console.log(arr);
    return arr
   
}



const updateuser =async (data) => {
    return await jf.writeFile(file, data);
  };



module.exports= {updateuser,getallAction}