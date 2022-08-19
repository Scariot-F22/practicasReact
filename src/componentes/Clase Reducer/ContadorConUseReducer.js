
import { useReducer } from "react";
import { TYPE } from "./actions";
import { initialState, reducer } from "./reducer";

// const initialState = {contador: 0, visible: false};

// const TYPE = {
//     incr: "INCREMENTAR",
//     decr: "DECREMENTAR",
//     incrx5: "INCREMENTARx5",
//     decrx5: "DECREMENTARx5",
//     reset: "REINICIAR",
// }


// function reducer(state, action) { 

//     switch (action.type) {
//         case TYPE.incr:
//             return {contador: state.contador + 1, visible: true}
//         case TYPE.decr:
//             return {contador: state.contador - 1, visible: true}
//         case TYPE.incrx5:
//             return {contador: state.contador + action.payload, visible: true}
//         case TYPE.decrx5:
//             return {contador: state.contador - action.payload, visible: true}
//         case TYPE.reset:
//             return {contador: 0, visible: state.visible}
//         case "MOSTRAR":
//             return {contador: state.contador, visible: true}
//         case "OCULTAR":
//             return {contador: state.contador , visible: false}
//         default:
//             return state
//     }
// }

const ContadorReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const sumar = ()=> state.visible && dispatch({type: TYPE.incr}),
        restar = ()=> state.visible && dispatch({type:TYPE.decr}),
        sumar5 = ()=> state.visible && dispatch({type: TYPE.incrx5, payload:5}),
        restar5 = ()=> state.visible && dispatch({type:TYPE.decrx5, payload:5}),
        reset = ()=>  dispatch({type: TYPE.reset}),
        mostrar= ()=> dispatch({type: TYPE.mostrar}),
        ocultar= ()=> dispatch({type:TYPE.ocultar});
    return ( 
        <>
            <button onClick={sumar}>+</button>
            {state.visible && <h2>{state.contador}</h2>}
            <button onClick={state.visible && reset}>reset</button>
            <button onClick={restar}>-</button>
            <button onClick={sumar5}>+5</button>
            <button onClick={restar5}>-5</button>
            <div>
                <button onClick={mostrar}>MOSTRAR</button>
                <button onClick={ocultar}>OCULTAR</button>
            </div>
        </>
     );
}
 
export default ContadorReducer;