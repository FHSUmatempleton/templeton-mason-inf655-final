import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../Navbar";
import Movies from "../Movies/Movies";
import Favorites from "../Movies/Favorites";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Movies />
        <Favorites />
      </div>
      <Footer />
    </>
  );
}