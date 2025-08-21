import React from "react";
import { Navbar, Page } from "../../components/Home";
import Eventpg from "../Eventpg/Eventpg";
import { Footer } from "../../components/Magazine";
const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Page/>
      <Eventpg/>
      <Footer/>
    </div>
  );
};

export default HomePage;
