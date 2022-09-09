import React from "react";

const CrudTableRow = ({caballero, deleteData, setEditData}) => {

    const{name,constellation,id} = caballero;
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={()=>setEditData(caballero)}>Editar</button>
        <button onClick={()=>deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
