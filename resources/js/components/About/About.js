import React, { useState, useRef, useEffect } from "react";
import ReactDom from "react-dom";
import Odometer from "react-odometerjs";

//CSS
import "./about.css";

// import "./public/myfonts/AlternateGotNo3D.ttf";

import "odometer/themes/odometer-theme-default.css";
import { FaMousePointer } from "react-icons/fa";
import { BsCursorFill, BsFillCursorFill } from "react-icons/bs";
// import { useEffect } from "react/cjs/react.production.min";
// import { useState } from "react/cjs/react.production.min";

const About = () => {
    const [count, setCount] = useState(101234);

    useEffect(() => {
        const timeoutId = setTimeout(() => setCount(101321), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    // const targetRef = useRef(null);

    // useOdometer(targetRef, count);

    // const kontinueCount = setInterval(() => {
    //     timeoutId();
    // }, 2000);

    return (
        <>
            <div className="about" id="about">
                <div className="about-container">
                    <div className="about-hero-1">
                        <div className="about-header">
                            <h5>About</h5>
                        </div>
                        <div className="about-content">
                            <h1>
                            My <span className="hashtags">#Receipts</span> Per Time                                
                            {/* My <span className="hashtags">#Receipts</span> Per Time */}
                            </h1>
                            <p>
                                {/* People, Products, Services, Places And Numbers. */}
                                {/* a new digital, interactive smart receipts
                                sharing counter{" "} */}
                                An AI Powered Digital Smart Counter.
                                
                            </p>

                            <div className="counter-up">
                                <Odometer
                                    value={count}
                                    format="d"
                                    duration={500}
                                    className="myOdometer"
                                />

                                {/* <button onClick={() => {
                                    setCount(count + 1234);
                                }}>
                                    CLICK ME
                                </button> */}
                                <BsFillCursorFill
                                    className="bsIcon"
                                    size="70"
                                    onClick={() => {
                                        setCount(count + 1234);
                                    }}
                                />
                            </div>
                        </div>
                        {/* <div className="about-footer"></div> */}
                    </div>
                    <div className="about-hero-2">
                        <div className="about-hero-2-content">
                            <p>
                                A seamless way to write, save, share tabs with yourself and the world on your terms.
                            </p>
                            <h1>
                                {" "}
                                What Matter's <br />Your <span className="hashtags">
                                    #Numbers
                                </span>{" "}
                                Are Right.
                            </h1>

                            {/* <p>A digital counter that makes it possible to</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
