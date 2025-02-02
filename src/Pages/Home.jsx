import React, { useState, useEffect } from "react";
import "../App.css";
import Hero from "../Components/Hero";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Footer from "../Components/Footer";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";
import Section7 from "../Components/Section7";
import Section8 from "../Components/Section8";
import Section9 from "../Components/Section9";
function Home() {
  const [resized, setResized] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setResized(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="home">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </div>
  );
}

export default Home;
// className={
//   resized <= 640
//     ? `text-2xl text-blue-500`
//     : resized > 641 && resized <= 768
//     ? `text-2xl text-green-400`
//     : resized > 769 && resized <= 1024
//     ? `text-2xl text-teal-700`
//     : `text-orange-600`
// }
