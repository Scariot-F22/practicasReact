
import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, deleteData, setEditData}) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constellation</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && (
                    <tr>
                        <td>No se encontraron datos para mostrar</td>
                    </tr> 
                    )}
                    {
                        data.length !== 0 && (data.map( el => <CrudTableRow key={el.id} caballero={el} setEditData={setEditData} deleteData={deleteData}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable