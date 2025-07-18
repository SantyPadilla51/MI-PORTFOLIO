import { useEffect } from "react"
import { consoleText } from "./index.js"
import Navbar from "./Components/Navbar"
import SobreMi from "./Components/SobreMi.jsx";
import Main from "./Components/Main.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import { Educacion } from "./Components/Educacion.jsx";
import Skills from "./Components/Skills.jsx";
import Contacto from "./Components/Contacto.jsx";


function App() {

  useEffect(() => {
    consoleText(['Santiago Padilla', 'Software Developer'], 'text', ['white', 'lightblue']);
  }, [])

  return (
    <>

      <section className="sm:flex md:grid grid-cols-6">
        <Navbar />
        <section className="col-span-5">
          <Main />
          <SobreMi />
          <Portfolio/>
          <Skills/>
          <Educacion/>
          <Contacto/>
        </section>
      </section>

    </>
  )
}

export default App
