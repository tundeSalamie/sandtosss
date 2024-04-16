import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./reviewslider.css";

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel responsive={responsive}>
            <div className="review-slider-content">
                <div className="review-card">
                    <div className="review-img"></div>
                    <div className="review-title"></div>
                    <div className="review-review"></div>
                </div>
            </div>
            <div className="review-slider-content">
                <div className="review-card">
                    <div className="review-img"></div>
                    <div className="review-title"></div>
                    <div className="review-review"></div>
                </div>
            </div>
            <div className="review-slider-content">
                <div className="review-card">
                    <div className="review-img"></div>
                    <div className="review-title"></div>
                    <div className="review-review"></div>
                </div>
            </div>
            <div className="review-slider-content">
                <div className="review-card">
                    <div className="review-img"></div>
                    <div className="review-title"></div>
                    <div className="review-review"></div>
                </div>
            </div>
            <div className="review-slider-content">
                <div className="review-card">
                    <div className="review-img"></div>
                    <div className="review-title"></div>
                    <div className="review-review"></div>
                </div>
            </div>
            <div className="review-slider-content">
                <div className="review-card">
                    <div className="review-img"></div>
                    <div className="review-title"></div>
                    <div className="review-review"></div>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;
