import Intro from "./components/intro";
import Nav from "./components/externalNav";
import Projects from "./components/projects";
import Skills from "./components/skills";
import './assets/css/app.css'


function App() {
  return (
    <>
      <Intro />
      <Nav />
      <Skills />
      <Projects />
    </>
  )
}

export default App
