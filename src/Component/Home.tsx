/* eslint-disable @typescript-eslint/no-explicit-any */
// import Hero from './Hero'
import Services from "./Services/Services";
import Team from "./myteam/Team";
import Reviews from "./Reviews/Review";
import BookConsult from "./BookConsult/BookConsult";
import Hero from "./Hero/Hero";
import { AuroraBackground } from "../UI/aurora-background";
// import content from "../assets/content/content.json";
const Home = ({ content }: any) => {
  return (
    <>
      <AuroraBackground>
        <Hero content={content} />
        <Services content={content} />
        <Team content={content} />
        <Reviews content={content} />
        <BookConsult content={content} />
      </AuroraBackground>
    </>
  );
};

export default Home;
