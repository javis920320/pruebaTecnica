const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../bd.json");

const leerArchivo = () => {
  try {
    const dataDb = JSON.parse(fs.readFileSync(filePath));
    // const { pacientes } = dataDb;
    // return pacientes ? pacientes : null;
    return dataDb;
  } catch (error) {
    return error;
  }
};
const listMedicos=()=>{
  try {
    const{medicos}=  leerArchivo()
    return medicos;   
  } catch (error) {
    console.log(error)
  }
 
}

const crearNotaMedico=(nota)=>{

}

const escribirArchivo = (pacientes) => {
  fs.writeFile(filePath, JSON.stringify(pacientes, null, 2), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("success write file");
    }
  });
};

module.exports = {
  leerArchivo,
  escribirArchivo,
  listMedicos
};
