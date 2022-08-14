import {estilos}  from "./EstilosTarjetas";
import './Styles.css'

const Tarjetas = props => {
    return (  
        props.array.map(i => 
            <a key={i.id} href={i.redireccion} style={estilos.anchor}>
                <div style= {estilos.div}>
                    <img src={i.img} alt={i.nombre} style= {estilos.img}/>
                    <img src={i.logo} style={estilos.logo}/>
                    {props.descuento && <figcaption style={estilos.figcaption}>
                        <h4> {i.nombre} </h4>
                        <p style={{color:"#9b9b9b"}}> {i.descuento} </p>
                        <h2> {i.tituloDescuento} </h2>
                    </figcaption>}
                </div>
            </a>
        )
    );
}
 
export default Tarjetas;

