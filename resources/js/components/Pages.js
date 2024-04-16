import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter } from "react-router-dom";

// import Pages from "./Pages";
import Navbar from "./Header/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Whatwedo from "./Whatwedo/Whatwedo";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Faqs from "./Faqs/Faqs";
import Demo from "./Demo/Demo";
import Myquee from "./Myquee/Myquee";
import SecFooter from "./Footer/SecFooter";

const Pages = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Home />
            <About />
            <Whatwedo />
            <Myquee />
            <Demo />
            {/* <Reviews /> */}
            <Faqs />
            <Contact />
            <SecFooter />
            <Footer />
        </div>
    );
};

export default Pages;
