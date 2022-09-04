import { useState, useEffect } from "react";
import Loading from "./Loading";
import Quote from "./Quote";
import axios from "axios";

const initialQuote = {text:"cita",author:"autor"}

const RequestApi = () => {

    const [quote, setQuote] = useState(initialQuote);
    const [loading, setLoading] = useState(false)

    const updateQuote = async ()=> {

        setLoading(true)
        // PETICIÓN DE TIPO FETCH -> GET
        //vs.
        //PETICIÓN DE TIPO AXIOS -> GET
        //Paso 1 => Definir el endpoint 
        let url = "https://www.breakingbadapi.com/api/quote/random";

        //Paso 2 => Realizar la peticion de tipo FETCH
        // let resp = await fetch(url) // --> Por defecto, el método fetch realiza un GET por defecto
        //vs. => Petición de tipo axios
        let resp = await axios.get(url)
        console.log(resp)
        
        //Async -> Asíncrona
        //Await -> A la espera de...

        //Paso 3 => Capturar la resp y pasarla a formato Json con FETCH
        // const [newQuote] = await resp.json() //vs. Javascript => JSON.parse(resp)
        //vs. => Caprurar la resp con AXIOS. No necesita pasarla a formato Json, porque ya lo trae en ese formato automáticamente
        const[newQuote] = await resp.data
        const{quote: text, author} = newQuote

        //Paso 4 => Pasar la data obtenida a la función actualizadora del useState (setQuote)
        setQuote({  //Objetos literales 
            text,
            author  
        })
        setLoading(false)

    }

    useEffect(() => {
     updateQuote()
    }, [])
    
    

  return (
    <>
        <div style={{display:"flex", flexDirection:"column"}}>
            <img src="https://i.pinimg.com/originals/d3/bb/d0/d3bbd00fc97e601c6dabca395af2e7f6.png" alt="Breacking Bad" width="500" height="500"/>
            <button  onClick={updateQuote} style={{width:500, height:30, backgroundColor:"#69770F",marginTop:5}}>Obtener Cita</button>
        </div>
        {loading && <Loading />}
        {!loading && <Quote quote={quote}/>}

        {/* O bien, {loading ? <Loading /> : <Quote quote={quote}/>} */}
    </>
  )
}

export default RequestApi