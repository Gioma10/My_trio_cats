import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/galleria" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
