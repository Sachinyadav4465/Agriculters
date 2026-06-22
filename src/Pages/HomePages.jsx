import React from "react";
import Hero from "./HeroPages";
import About from "./About";
import Projects from "./Projects";
import WhyChoose from "./WhyChoose";
import  Service from "./Service"
import BannerCTA from "./BannerCTA";
import ProcessSteps from "./ProcessSteps";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

const Home = () => {
  return (
    <>

      <Hero />
      <About/>
      <Projects/>
      <WhyChoose/>
      <BannerCTA/>
      <Service/>
      
      <ProcessSteps/>
      <FAQ/>
      <Testimonials/>
      <Blog/>
     
    </>    
  );
};

export default Home;