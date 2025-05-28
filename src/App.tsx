import './App.css'
// import Header from './Component/Header'
import HeadHero from './Component/header/Header'
// import CominSoon from './Component/Comesoon'
import Home from './Component/Home'
import Footer from './Component/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Component/Aboutus/AboutUS';
import Career from './Component/Career/Career';
import content from './assets/content/content.json'

function App() {
  return (
    <>
      <Router>
        <HeadHero content={content}></HeadHero>
        <Routes>
          <Route path="/" element={<Home content={content} />}></Route>
          <Route path="/about-us" element={<About content={content} />}></Route>
          <Route path="/career" element={<Career content={content} />}></Route>
        </Routes>
        <Footer content={content}></Footer>
      </Router>
    </>
  );
}

export default App;
