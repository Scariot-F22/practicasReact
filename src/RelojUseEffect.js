import { useState, useEffect } from "react";

function Reloj({hora}) {
    return <h1>{hora}</h1>
    
}

const RelojUseEffect = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        let temporizador;
        if(visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString())
            }, 1000)
        }else{
            clearInterval(temporizador);
        }
        return ()=> clearInterval(temporizador);
    }, [visible])
    

  return (
    <>
        <div>Reloj Local</div>
        {visible && <Reloj hora={hora}/>}
        <button onClick={()=> setVisible(true)}>Iniciar</button>
        <button onClick={()=> setVisible(false)}>Detener</button>
    </>
    
  )
}

export default RelojUseEffect;
