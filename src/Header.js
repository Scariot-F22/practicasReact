import { useContext } from "react";
import { ThemeContext } from "./componentes/ThemeProvider";

const Header = () => {
    const {theme, handleTheme} = useContext(ThemeContext)
  return (
    <header className={theme}>
        <form>
            <fieldset>
                <label htmlFor="light">Light</label>
                <input type="radio" name="radiobutton" id= "light" value="light" onClick={handleTheme}/>
                <label htmlFor="dark">Dark</label>
                <input type="radio" name="radiobutton" id= "dark" value="dark" onClick={handleTheme}/>
            </fieldset>
        </form>
    </header>
  )
}

export default Header