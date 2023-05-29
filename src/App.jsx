import { Hero, About, Feedback, Contact, Experience, Works, Tech, Navbar, Stars} from "./components"
import { BrowserRouter } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
     <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedback />
     <div className="relative z-0">
      <Contact />
      <Stars />
     </div>
    </div>
    </BrowserRouter>
   
  )
}

export default App
