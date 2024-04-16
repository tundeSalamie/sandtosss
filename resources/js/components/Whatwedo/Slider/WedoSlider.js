import React, { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Data from "./Data.js";

import "./wedoslider.css";

const WedoSlider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    // const CustomDot = ({ onClick, ...rest }) => {
    //   const {
    //     onMove,
    //     index,
    //     active,
    //     carouselState: { currentSlide, deviceType }
    //   } = rest;
    //   const carouselItems = [CarouselItem1, CarouselItem2, CarouselItem3, CarouselItem4]

    //   return (
    //     <button className={active ? "active" : "inactive"} onClick={() => onClick()}>
    //       {React.Children.toArray(carouselItems)[index]}

    //     </button>
    //   )
    // }

    const CustomDot = ({ onMove, index, onClick, active }) => {
        return (
            <li
                className={active ? "active" : "inactive"}
                onClick={() => onClick()}
            ></li>
        );
    };

    return (
        <Carousel
            responsive={responsive}
            showDots={true}
            CustomDot={<CustomDot />}
            // renderDotsOutside={renderButtonGroupOutside}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
            <div className="wedo-slider-content">
                <div className="wedo-slider-container">
                    <div className="wedo-slider-l">
                        <h1>
                            <span className="hashtags">#Open</span> A Tab
                        </h1>
                        <p>
                            A tab is a box, a counter you keep all receipts,
                            evidence of payment, proof of transactions, terms
                            and conditions for personal, business or official in
                            realtime.
                        </p>
                    </div>
                    <div className="wedo-slider-r">
                        <img
                            className="tabimg"
                            src="../imgs/tab_smrt1.fw.png"
                            alt="tab1"
                        />
                    </div>
                </div>
            </div>
            <div className="wedo-slider-content">
                <div className="wedo-slider-container">
                    <div className="wedo-slider-l">
                        <h1>
                            <span className="hashtags">#Keep</span> A Tab
                        </h1>
                        <p>
                            A designed compartmentalized space that helps with
                            the ease of doing business, helping connecting the
                            dots and making accountability a lifestyle. Write,
                            save, share, tag, notes with your fave brands and
                            people.
                        </p>
                    </div>
                    <div className="wedo-slider-r">
                        <img
                            className="tabimg"
                            src="../imgs/main_slide_1.fw.png"
                            alt="tab1"
                        />
                    </div>
                </div>
            </div>
            <div className="wedo-slider-content">
                <div className="wedo-slider-container">
                    <div className="wedo-slider-l">
                        <h1>
                            <span className="hashtags">#Toss</span> A Tab.
                        </h1>
                        <p>
                            As much as we believe that not all tabs are worth
                            keeping, we do also believe that some tabs become
                            some combination to some places. Follow, like, get
                            updates on your fave brands, people and places.
                        </p>
                    </div>
                    <div className="wedo-slider-r">
                        <img
                            className="tabimg"
                            src="../imgs/main_slide_1.fw.png"
                            alt="tab1"
                        />
                    </div>
                </div>
            </div>
            <div className="wedo-slider-content">
                <div className="wedo-slider-container">
                    <div className="wedo-slider-l">
                        <h1>
                            <span className="hashtags">#Share</span> A Tab
                        </h1>
                        <p>
                            You dont have to write or worry about how, with our
                            privacy, security, end to end encryption. Yes, give
                            us access to pick after you. And present it for you
                            when you most require it
                        </p>
                    </div>
                    <div className="wedo-slider-r">
                        <img
                            className="tabimg"
                            src="../imgs/main_slide_1.fw.png"
                            alt="tab1"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="wedo-slider-content" >item 5</div>
      <div className="wedo-slider-content" >item 6</div> */}
        </Carousel>
    );
};

export default WedoSlider;
