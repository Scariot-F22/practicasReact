import { useContext } from "react";
import { ThemeContext } from "./componentes/ThemeProvider";

const Main = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div style={{height: "100vh"}} className={theme}>Main</div>
  )
}

export default Main
