import { useContext } from "react";
import { EquipoContext } from "./EquipoContextProvider";

const EjUseContextEquipos = () => {

    const equipos = useContext(EquipoContext);

  return (
   <ul>
    {equipos.map(equipo => {
        return(
            <li key={equipo.id}>
                <h2>{equipo.title}</h2>
                <p>{equipo.dt}</p>
            </li>
        )
    })}
   </ul>
  )
}

export default EjUseContextEquipos