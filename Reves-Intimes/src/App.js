import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import Get from "./partials/Get";
import Partner from "./components/Partner";
import Navbar from "./components/Navbar";
import First from "./components/First"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div>
            <Navbar />
            <First />
            <Header />
            <Partner />
            <Get />
            <Footer />
        </div>
    )
}

export default App;