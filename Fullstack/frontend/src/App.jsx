import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "./Components/Details/Details"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Add from "./Pages/Add/Add"
import Home from "./Pages/Home/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/:id" element={<Details/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
