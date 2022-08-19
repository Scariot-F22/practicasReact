import { TYPE } from "./actions";
export const initialState = {contador: 0, visible: false};

export function reducer(state, action) { 

    switch (action.type) {
        case TYPE.incr:
            return {contador: state.contador + 1, visible: true}
        case TYPE.decr:
            return {contador: state.contador - 1, visible: true}
        case TYPE.incrx5:
            return {contador: state.contador + action.payload, visible: true}
        case TYPE.decrx5:
            return {contador: state.contador - action.payload, visible: true}
        case TYPE.reset:
            return {contador: 0, visible: state.visible}
        case "MOSTRAR":
            return {contador: state.contador, visible: true}
        case "OCULTAR":
            return {contador: state.contador , visible: false}
        default:
            return state
    }
}