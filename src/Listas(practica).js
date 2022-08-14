import { useState } from "react";

const Listas = () => {
    const [lista, setLista] = useState(()=> [
        {id: 1, title: "item1"},
        {id: 2, title: "item2"},
        {id: 3, title: "item3"}
    ])
    const sumarItem = ()=> {
        setLista(prevList =>{
            return [
                ...prevList, 
                {id:4, title: "item4"}
            ]
        })
    }

  return (
    <>
        <ul >{lista.map(i => <li key={i.id}>{i.title}</li>) }</ul>
        <button onClick={sumarItem}>Agregar item</button>
        <button onClick={lista.map(i => <li key={i.id}>{i.title}</li>)}>Reiniciar</button>
    </>
  )
}

export default Listas;