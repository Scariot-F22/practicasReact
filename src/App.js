import BlogUseEffect from "./BlogUseEffect";
import ShoppingCart from "./claseCarritoDeCompras/ShoppingCart";
import ContadorReducer from "./componentes/Clase Reducer/ContadorConUseReducer";
import ContenedorTarjetas from "./componentes/ContenedorTarjetas";
import RequestApi from "./componentes/pedidoApi/RequestApi";
import Rutas from "./componentes/Rutas";
import ThemeProvider from "./componentes/ThemeProvider";
import Contador from "./Contador(practica)";
import EjUseContextEquipos from "./EjUseContextEquipos";
import EquipoContextProvider from "./EquipoContextProvider";
import Footer from "./Footer";
import Header from "./Header";
import Listas from "./Listas(practica)";
import Main from "./Main";
import RelojUseEffect from "./RelojUseEffect";
import WithWindowUseEffect from "./WithWindowUseEffect";



function App() {
  return (
    <>
      {/* <Contador /> */}

      {/* <ContenedorTarjetas /> */}

      {/* <Listas /> */}

      {/* <BlogUseEffect /> */}

      {/* <WithWindowUseEffect /> */}
      
      {/* <RelojUseEffect /> */}

      {/* <EquipoContextProvider>
        <EjUseContextEquipos />
      </EquipoContextProvider> */}

      {/* <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider> */}
      {/* <Rutas /> */}
      {/* <ContadorReducer /> */}
      <ShoppingCart />
      {/* <RequestApi /> */}
    </>
  );
}

export default App;
