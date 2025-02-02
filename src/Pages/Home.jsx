import React, { useState, useEffect } from "react";

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
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex
        inventore alias repellendus quis veritatis, magnam rem nobis itaque
        suscipit debitis maiores deleniti facere? Architecto harum maiores ea
        ipsum totam!
      </h1>
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
