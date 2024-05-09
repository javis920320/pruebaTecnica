import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import { useParams } from 'react-router-dom'
import { usePaciente } from '../hooks/usePaciente'

const Paciente = () => {
//  const {idPaciente} = useParams()
//  const[paciente,setPaciete]=useState()
//  const {getPacienteById}=usePaciente()
//  const obtenerDatos=()=>{
//   setPaciete(getPacienteById(idPaciente))
//  }
//  useEffect(obtenerDatos,[paciente,idPaciente])

  return (
    <div className=' grid place-items-center h-full'>
      {/* {JSON.stringify(paciente)} */}
      {/* {paciente&&(<Card paciente={paciente}/>)} */}
      
    </div>
  )
}

export default Paciente
