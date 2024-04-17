import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Loader from "./components/Loader"
import Header from "./components/Header"

const Home = lazy(() => import('./pages/Home'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Lectures = lazy(() => import('./pages/Lectures'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/lectures" element={<Lectures/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
