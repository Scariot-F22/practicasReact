import { useContext } from "react";
import { ThemeContext } from "./componentes/ThemeProvider";

const Footer = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div style={{height: "100vh"}} className={theme}>Footer</div>
  )
}

export default Footer