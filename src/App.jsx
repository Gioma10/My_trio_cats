import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import { photosLoader } from "./pages/Gallery.jsx"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import ErrorPage from "./pages/ErrorPage.jsx"
import RootLayout from "./Layout/RootLayout.jsx"

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="galleria" element={<Gallery/>} loader={photosLoader}/>
      <Route path="*" element={<ErrorPage/>} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
