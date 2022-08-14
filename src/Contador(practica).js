import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador + 1),
        restar = () => setContador(contador - 1),
        reset = () => setContador(0);
    return ( 
        <>
            <button onClick={sumar}>+</button>
            <h2>{contador}</h2>
            <button onClick={reset}>reset</button>
            <button onClick={restar}>-</button>
        </>
     );
}
 
export default Contador;