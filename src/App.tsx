import './App.css'
// import Header from './Component/Header'
import HeadHero from './Component/header/Header'
// import CominSoon from './Component/Comesoon'
import Home from './Component/Home'
import Footer from './Component/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Component/Aboutus/AboutUS';

function App() {
  return (
  <>
  <Router>
  <HeadHero></HeadHero>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about-us' element={<About />}></Route>
  {/* <Home></Home> */}
  </Routes>
  <Footer></Footer>
  </Router>
  </>
  )
}

export default App;
