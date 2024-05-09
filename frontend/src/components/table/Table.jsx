import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { useModal } from "../../hooks/useModal";
import Modal from "../utils/Modal";
import Card from "../card/Card";
import { usePaciente } from "../../hooks/usePaciente";
import { PacienteContext } from "../../context/pacienteContext";

const Table = () => {
  const { reload, setreload } = useState(false);
  const { setPacienteSel } = useContext(PacienteContext);
  const { pacientes, getPacienteById, actualizarPaciente, fetchData } =
    usePaciente();
  const { stateModal, closeModal, openModal } = useModal();
  

  const handleClick = (id) => {
    const data = getPacienteById(id);
    setPacienteSel(data);
    openModal();
  };
  return (
    <>
      <Modal
        showModal={stateModal}
        closeModal={closeModal}
        modalContent={<Card />}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="text-start">Paciente</th>
            <th>Identificacion</th>
            <th>Celular</th>
            <th>Entidad</th>
            <th>Ultima Atención</th>
            <th>Tipo de Atención</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pacientes && pacientes.length > 0 ? (
            pacientes.map(
              ({
                idPaciente,
                namePaciente,
                identificacion,
                celular,
                entidadSalud,
                fechaAtencion,
                tipoAtencion,
                estado,
              }) => (
                <tr key={idPaciente} onClick={() => handleClick(idPaciente)}>
                  <td className="w-[100px]">{idPaciente}</td>
                  <td className=" text-start campoNombre w-[300px]">
                    {namePaciente}
                  </td>
                  <td>CC - {identificacion}</td>
                  <td>{celular}</td> <td>{entidadSalud}</td>
                  <td>{fechaAtencion}</td> <td>{tipoAtencion}</td>
                  <td>
                    <p
                      className={`text-center w-[120px] h-[31px] rounded-sm ${
                        estado === "Critico"
                          ? "bg-red-200 text-red-500"
                          : estado === "Estable"
                          ? "bg-green-200 text-green-400"
                          : "bg-amber-100 text-yellow-300"
                      }`}
                    >
                      {estado}
                    </p>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={8}>No se encontro registros de pacientes</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
