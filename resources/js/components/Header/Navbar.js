import React from "react";
import ReactDOM from "react-dom";
import { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as LinkRouter, useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

// CSS
import "./navbar.css";

const Navbar = () => {
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const goToPageAndScroll = async (selector) => {
        showNavbar();
        await navigate("/");
        await scroller.scrollTo(selector, {
            duration: 800,
            smooth: true,
            offset: -70,
            spy: true,
        });
    };

    return (
        <div className="navigation">
            <div className="navbar fixed">
                {location !== "blog" ? (
                    <>
                        <LinkRouter
                            to="/"
                            spy="true"
                            offset={-70}
                            duration={800}
                            className="brand-name"
                        >
                            <img src="../../../imgs/site_logo.jpg" />
                        </LinkRouter>

                        <div className="navigation-menu active" ref={navRef}>
                            <ScrollLink
                                // activeClass="active"
                                to="home"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                Home
                            </ScrollLink>

                            <ScrollLink
                                // activeClass="active"
                                to="about"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                About
                            </ScrollLink>

                            <ScrollLink
                                // activeClass="active"
                                to="whatwedo"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                How it works
                            </ScrollLink>

                            <ScrollLink
                                // activeClass="active"
                                to="demo"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                Sign up
                            </ScrollLink>

                            {/* <ScrollLink
                                // activeClass="active"
                                to="faq"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                FAQs
                            </ScrollLink> */}

                            {/* <ScrollLink
                                // activeClass="active"
                                to="demo"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                Demo
                            </ScrollLink> */}

                            {/* <LinkRouter to="/blog" onClick={showNavbar} className="menu">
                                Blog
                            </LinkRouter> */}

                            {/* <ScrollLink
                                // activeClass="active"
                                to="review"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                Reviews
                            </ScrollLink> */}

                            <ScrollLink
                                // activeClass="active"
                                to="contact"
                                spy="true"
                                offset={-70}
                                duration={800}
                                className="menu"
                                onClick={showNavbar}
                            >
                                Contact
                            </ScrollLink>

                            <button
                                className="nav-btn nav-close-btn"
                                onClick={showNavbar}
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <button className="nav-btn" onClick={showNavbar}>
                            <FaBars />
                        </button>
                    </>
                ) : (
                    <>
                        <LinkRouter to="/" className="brand-name">
                            <img src="../../../imgs/site_logo.jpg" />
                        </LinkRouter>

                        <div className="navigation-menu" ref={navRef}>
                            <ScrollLink
                                // to="home"
                                className="menu"
                                onClick={() => goToPageAndScroll("home")}
                            >
                                Home
                            </ScrollLink>

                            <ScrollLink
                                className="menu"
                                onClick={() => goToPageAndScroll("about")}
                            >
                                About
                            </ScrollLink>

                            <ScrollLink
                                className="menu"
                                onClick={() => goToPageAndScroll("whatwedo")}
                            >
                                What we do
                            </ScrollLink>

                            <ScrollLink
                                className="menu"
                                onClick={() => goToPageAndScroll("faqs")}
                            >
                                FAQs
                            </ScrollLink>

                            <LinkRouter
                                onClick={() => goToPageAndScroll("blog")}
                                className="menu"
                            >
                                Blog
                            </LinkRouter>

                            <ScrollLink
                                className="menu"
                                onClick={() => goToPageAndScroll("contact")}
                            >
                                Contact
                            </ScrollLink>

                            <button
                                className="nav-btn nav-close-btn"
                                onClick={showNavbar}
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <button className="nav-btn" onClick={showNavbar}>
                            <FaBars />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
