import { useState, createContext } from "react";

export const EquipoContext = createContext();

const EquipoContextProvider = (props) => {

    const [equipo, setEquipo] = useState([
        {id: "1", title: "River Plate", dt: "Marcelo Gallardo"},
        {id: "1", title: "Boca Jrs.", dt: "Marcelo Delgado"},
        {id: "1", title: "Racing", dt: "Frenando Gago"},
        {id: "1", title: "Independiente", dt: "Julio César Falcioni"}
    ])
    
  return (
    <EquipoContext.Provider value={equipo}>
        {props.children}
    </EquipoContext.Provider>
  )
}

export default EquipoContextProvider