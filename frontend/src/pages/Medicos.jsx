import React, { useState } from 'react'
import{medicos} from "../datapacintes.json"
import { Link } from 'react-router-dom'
const Medicos = () => {
     const  [doctores,setDoctores]=useState(medicos)
  return (
    <div >
      <h3 className='secoundary'>Ingresar Como</h3>
      <ul className='flex flex-col justify-between'>
      {medicos&&medicos.map(({idMedico,nombre})=>(<li className='bg-gray-200 p-4 hover:bg-slate-400' key={idMedico}>
        <Link to={`pacientes/${idMedico}`}>{nombre}</Link>
      </li>))}
      </ul>

    </div>
  )
}

export default Medicos
