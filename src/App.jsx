import Nav from './components/Nav/Nav'
import { Outlet } from "react-router-dom"


function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
