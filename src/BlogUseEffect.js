import { useState, useEffect } from "react";


const BlogUseEffect = () => {
    const [Post, setPost] = useState("posteos");

    useEffect(() => {
        alert("Efecto secundario desde useEffect")
    }, [Post]);
    
  return (
    <>
        <div>
            <button onClick={()=> setPost("posteos")}>Posteos</button>
            <button onClick={()=> setPost("usuarios")}>Usuarios</button>
            <button onClick={()=> setPost("comentarios")}>Comentarios</button>
        </div>
        <h2>{Post}</h2>

    </>
  )
}

export default BlogUseEffect