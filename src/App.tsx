import "./App.css";
// import Header from './Component/Header'
import HeadHero from "./Component/header/Header";
// import CominSoon from './Component/Comesoon'
import Home from "./Component/Home";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/Aboutus/AboutUS";
import Career from "./Component/Career/Career";
// import content from "./assets/content/content.json";
import { fetchContent } from "./redux/actions/contentActions";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./redux/reducers/rootReducer";
import { useEffect } from "react";
import type { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function App() {
  const dispatch = useAppDispatch();
  const {
    data: content,
    loading,
    error,
  } = useAppSelector((state: RootState) => state.content);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  if (loading || !content) return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <DotLottieReact
        src="/images/Loaders/render1.lottie"
        loop
        autoplay
        className="w-132 sm:w-120 md:w-152 lg:w-160"
      />
    </div>
  );
  if (error) return <div>Error loading content: {error}</div>;
  
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
