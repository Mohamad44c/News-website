import React from "react";
import { Carousel, Categories, Footer, Header } from "./containers";
import { MostRead, Navbar } from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="body">
        <Header/>
        <Navbar />
        <Carousel />
        <Categories />
        <MostRead />
        <Footer />
      </div>
    </div>
  );
};

export default App;
