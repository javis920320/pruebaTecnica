import "./App.css";
import { usePaciente } from "./hooks/usePaciente";
import Table from "./components/table/Table";
import Card from "./components/card/Card";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Medicos from "./pages/Medicos";
import Pacientes from "./pages/Pacientes";
import Paciente from "./pages/Paciente";
import Modal from "./components/utils/Modal";

function App() {


  return (
    <main className="grid justify-center">
      
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Medicos/>} />
        <Route path="/pacientes/:idDoctor" element={<Pacientes/>}/>
        <Route path="/paciente/:idDoctor/:idPaciente" element={<Paciente/>}/>

      </Routes>
      
      </BrowserRouter>
      
      
      
      {/* <Card></Card>
      {pacientes&&<Table pacientes={pacientes}/>} */}

 

      
    </main>
  );
}

export default App;
