import React from "react";

// CSS
import "./faqs.css";
import Accordion from "./Accordion/Accordion";

const Faqs = () => {
    const AccordionData = [
        {
            title: "What it's about",
            content:
                "It is an AI powered digital counter system that helps keep track, manage receipts, agreements between people, friends and businesses in realtime",
        },
        {
            title: "Why tosssme?",
            content: "To help make accountability a lifestyle, to help connect the dots in spending and to bring about ease in doing business.",
        },
        {
            title: "Who is it for?",
            content:
                "For individuals, families, Brands, Entrepreneurs, manufacturers, retailers, sales person, corporate organisations, government and non-governmental",
        },
        {
            title: "How does it work?",
            content: "It is not an accounting software, it is not an inventory manager, it is a digital counter that helps keep tab on/with favourite brands and services. ",
        },
    ];

    return (
        <div className="faq" id="faq">
            <div className="faq-container">
                <div className="faq-l">
                    <div className="faq-header">
                        <h5>FAQs</h5>
                    </div>
                    <div className="faq-content">
                        <h1>
                            Frequently Asked{" "}
                            <span className="hashtags">#Questions.</span>
                        </h1>
                        <p>We Are Culture, Engineers, community-centric</p>
                    </div>
                    <div className="faq-footer"></div>
                </div>
                <div className="faq-r">
                    <div className="major-accordion">
                        <Accordion data={AccordionData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
