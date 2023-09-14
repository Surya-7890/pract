import { Route, Routes } from "@solidjs/router"
import Home from "./pages/home/Home"
import Destination from "./pages/destination/Destination"
import Crew from "./pages/crew/Crew"
import Technology from "./pages/technology/Technology"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="h-screen w-screen relative">
    <Routes>
      <Route path='/' component={Home}/>
      <Route path='/destination' component={Destination}/>
      <Route path='/crew' component={Crew}/>
      <Route path='/technology' component={Technology}/>
    </Routes>
    <Navbar/>
    </div>
  )
}

export default App