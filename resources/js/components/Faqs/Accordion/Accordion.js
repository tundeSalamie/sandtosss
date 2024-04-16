import React, { useState } from "react";

import "./accordion.css";
import { FaChevronRight } from "react-icons/fa";

const Accordion = ({ data, multiple = false }) => {
    const [myactive, setMyactive] = useState(0);
    return (
        <div className="custom-accordion">
            {data.map((tab, idx) => (
                <AccordionItem
                    key={idx}
                    {...tab}
                    myactive={myactive === idx}
                    multiple={multiple}
                    onToggle={e => setMyactive(a => a === idx ? "" : idx)}
                />
            ))}
        </div>
    );
};

const AccordionItem = ({ title, content, myactive, multiple, onToggle }) => {
    const [visibility, setVisibility] = useState(false);

    const isActive = () => (multiple ? visibility : myactive);

    const toggleVisibility = () => {
        setVisibility((v) => !v);
        onToggle();
    };

    return (
        <div className={`card ${isActive() ? "accordion-active" : ""}`}>
            <div className="card-header" onClick={toggleVisibility}>
                {title}
                <span className="accordion-icon">
                    <FaChevronRight />
                </span>
            </div>
            <div className="card-body">{content}</div>
        </div>
    );
};

export default Accordion;
