import React from "react";
import ReactDOM from "react-dom";

import {Link} from "react-scroll"
import * as Scroll from "react-scroll";

// CSS
// import "../../index.css"
import "./home.css";
import "./carousel.css";
import Carousel from "./Carousel";

const Home = () => {

    const scroller = Scroll.scroller;

    function toggleBtn(e) {
        scroller.scrollTo("demo", {
            smooth: true,
            duration: 800,
            spy: true,
            exact: true,
            offset: -70
        });
    }

    function toggleBtn2(e) {
        scroller.scrollTo("about", {
            smooth: true,
            duration: 800,
            spy: true,
            exact: true,
            offset: -70
        });
    }




    return (
        <>
            <div className="home" id="home">
                <div className="home-container">
                    <div className="hero-l">
                        <div className="home-header"></div>
                        <div className="home-content">
                            <h1>
                                Bringing Brands, Lifestyle, Business And World To Life.
                            </h1>
                            <h5>Write, Save Share Tabs On The Go.</h5>
                            <div className="hero-button">
                                <div className="hero-button-1" onClick={toggleBtn2}>
                                <Link to="demo"
                                     spy="true"
                                     offset={-70}
                                    duration={800}>
                                    SIGN UP HERE

                                    </Link>
                                </div>
                                {/* <div className="hero-button-2" onClick={toggleBtn}>
                                    <Link 
                                    
                                    to="demo"
                                     spy={true}
                                     offset={-70}
                                    duration={800}
                                    >
                                    SIGN UP

                                    </Link>
                                    
                                </div> */}
                            </div>
                        </div>
                        <div className="home-footer"></div>
                    </div>
                    <div className="hero-r">
                        <Carousel>
                            <div>
                                <img className="mainSlider-hero"
                                src="../imgs/slide_2.fw.png" 
                                alt="img1" />
                            </div>

                            <div>
                                <img className="mainSlider-hero"
                                src="../imgs/slide_1.fw.png" 
                                alt="img2" />
                            </div>

                            <div>
                                <img className="mainSlider-hero"
                                src="../imgs/slide_3.fw.png" 
                                alt="img3" />
                            </div>

                            <div>
                                <img className="mainSlider-hero"
                                src="../imgs/slide_4.fw.png" 
                                alt="img4" />
                            </div>

                        </Carousel>
                    </div>

                    {/* <div className="home-header"></div> */}
                    {/* <div className="home-content"></div> */}
                    {/* <div className="home-footer"></div> */}
                </div>
            </div>
        </>
    );
};

export default Home;
