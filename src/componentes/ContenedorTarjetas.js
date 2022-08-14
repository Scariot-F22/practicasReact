import Tarjetas from "./Tarjetas";
import {listaObjetos} from "./ListaObjetos";


const ContenedorTarjetas = () => {
    
    return (
            <div style={{
                display:"flex",
                justifyContent: "center",
                }}>
                <Tarjetas array= {listaObjetos} descuento={true} />
                
            </div>
    )
};

export default ContenedorTarjetas;

