import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { useState } from "react"
import Loader from "./components/Loader/Loader";

function App() {
  const [loading,setLoading] = useState(false);
  return (
    <div>
      {loading ?<Loader/>:null}
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
