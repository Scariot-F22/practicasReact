import { useState, useEffect } from "react";

const WithWindowUseEffect = () => {
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = ()=> {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

    }, [WindowWidth])
    

  return (
    <div>{WindowWidth}</div>
  )
}

export default WithWindowUseEffect