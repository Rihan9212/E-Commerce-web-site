import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import Add from './pages/Add'
import Orders from "./pages/Orders"
import List from "./pages/List"
import { useState } from "react"
import Login from "./components/Login"

const App = () => {

    const [token, setToken] = useState('');




  return (

<div className="bg-gray-50 min-h-screen">
  {token === ""
  ? <Login/>
  :
<>
<Navbar/>
<hr />

<div className="flex w-full">
  <SideBar/>
  <div className="w-[70%] mx-auto ml-[max(5vw,25p)] my-8 text-gray-600 text-base">
    <Routes>
      <Route path="/add" element={<Add/>} />
      <Route path="/add" element={<List/>} />
      <Route path="/add" element={<Orders/>} />
    </Routes>
  </div>

</div>
</>
}
  
</div> 

)
}

export default App