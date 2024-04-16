import React from "react";
import Marquee from "react-fast-marquee";
import Typical from "react-typical";
import "./myquee.css";

const Myquee = () => {
    return (
        <div className="myquee">
            <div className="myquee_cover">
            <p>The Ones We Serve</p>
            <h1>
                <span className="hashtags">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={["Family", 1000, 
                        "Entrepreneurs", 1000,
                        "Business", 1000,
                        "Health", 1000,
                        "Education", 1000,
                        "Government", 1000,
                        "NGOs", 1000,
                        "Entertainment", 1000,
                        "Brands", 1000,
                        "eCommerce", 1000,
                        "Consumers", 1000,
                        "Manufacturers", 1000,
                        "Real Estate", 1000,
                        "Organizations", 1000,
                        "Startups", 1000,
                        "Retailers", 1000,
                        "Entertainment", 1000,
                        "Logistics", 1000,
                        "Restaurants", 1000,
                        "Agriculture", 1000
                    ]}
                    />
                </span>
            </h1>

            <div className="myquee_container">
                <Marquee pauseOnHover>
                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/no_samp.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/trade.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/startup.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/skool.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/private.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/ngos.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/manufs.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/individual.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/health.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/government.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/family.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/entrep.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/entert.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/consumes.fw.png" alt="" />
                    </div>

                    <div className="myquee_wrapper">
                        <img src="../imgs/myquee/brands.fw.png" alt="" />
                    </div>
                </Marquee>
            </div>
            </div>
        </div>
    );
};

export default Myquee;
