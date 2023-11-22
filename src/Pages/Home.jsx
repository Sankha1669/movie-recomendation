import React from "react";
import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Moviecard from "../Components/Moviecard";
import Feedback from "../Components/Feedback";
import ScrollButton from "../Components/ScrollButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Moviecard />
      <Feedback />
      <ScrollButton />
    </>
  );
};

export default Home;
