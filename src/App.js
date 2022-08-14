import BlogUseEffect from "./BlogUseEffect";
import ContenedorTarjetas from "./componentes/ContenedorTarjetas";
import Contador from "./Contador(practica)";
import Listas from "./Listas(practica)";
import RelojUseEffect from "./RelojUseEffect";
import WithWindowUseEffect from "./WithWindowUseEffect";



function App() {
  return (
    <>
      <Contador />

      {/* <ContenedorTarjetas /> */}

      <Listas />

      <BlogUseEffect />

      <WithWindowUseEffect />
      
      <RelojUseEffect />
    </>
  );
}

export default App;
