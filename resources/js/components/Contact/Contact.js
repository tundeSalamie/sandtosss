import React, { useState, useEffect } from "react";

//CSS
import "./contact.css";
import {
    FaChevronRight,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMap,
    FaMapMarker,
    FaMapPin,
    FaPhone,
    FaPhoneAlt,
    FaPhoneSquare,
    FaTwitter,
} from "react-icons/fa";
import Http from "../Http";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [notifire, setNotifire] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        await Http.post("/contact", {
            name: name,
            email: email,
            message: message,
        })
            .then(function (response) {
                if (response.status === 200) {
                    setIsLoading(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setNotifire(true);
                    setTimeout(() => {
                        setNotifire(false);
                    }, 5000);
                }
            })
            .catch(function (error) {
                setIsLoading(false);
                if (error.response.status === 400) {
                    setNameError(error.response.data.message.name);
                    setEmailError(error.response.data.message.email);
                    setMessageError(error.response.data.message.message);
                }
            });
    };

    return (
        <div className="contactus" id="contact">
            <div className="contact-container">
                <div className="contact-l">
                    <div className="contact-header">
                        <h5>Contact us</h5>
                    </div>
                    <div className="contact-content">
                        <h1>
                            Have You Got{" "}
                            <span className="hashtags">#Anything</span> for us?
                        </h1>
                        <p>
                            We Would Like To Hear From You Just About Anything
                            And Everything.
                        </p>
                    </div>
                    <div className="contact-footer">
                        <div className="icon-contact">
                            <span>
                                <FaMapMarker
                                    size={30}
                                    className="contactIcon"
                                />{" "}
                                12 El-Tengi Plaza 1st Avenue, Gwarinpa, Abuja.
                            </span>
                            <br />

                            <span>
                                <FaPhoneSquare
                                    size={30}
                                    className="contactIcon"
                                />{" "}
                                +234 (905) 9930 521.
                            </span>
                        </div>
                        <div>
                            {" "}
                            <h1>
                                <span className="hashtags">#Follow </span>us
                            </h1>
                        </div>
                        <div className="social-icons">
                            <div className="mini-socials">
                                <a href="https://www.linkedin.com/company/tosssme" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className="mini-socials">
                                <a href="https://www.facebook.com/tosssme" target="_blank">
                                    <FaFacebook />
                                </a>
                            </div>
                            <div className="mini-socials">
                                <a href="https://www.instagram.com/tosssme" target="_blank">
                                    <FaInstagram />{" "}
                                </a>
                            </div>
                            <div className="mini-socials">
                                <a href="https://www.twitter.com/tosssmeup" target="_blank">
                                    {" "}
                                    <FaTwitter />{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-r">
                    <form onSubmit={handleSubmit} encType="multiple/form-data">
                    <div className="contact-wrapper">
                        
                        <h2>Get In Touch With Us. </h2>
                        {notifire ? (
                            <p>Your Message Has Been Sent Successfully!</p>
                        ) : (
                            ""
                        )}
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setNameError("");
                                        }}
                                        required
                                        type="text"
                                    />
                                    <span className="text">Your Name</span>
                                    <span className="line"></span>
                                </div>
                                <p className="error-message">
                                    {nameError ? nameError : ""}
                                </p>
                            </div>
                            {/* <div className="col">
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name=""
                                        required="required"
                                    />
                                    <span className="text">Last Name</span>
                                    <span className="line"></span>
                                </div>
                            </div> */}
                        </div>

                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailError("");
                                        }}
                                        required
                                    />
                                    <span className="text">Email</span>
                                    <span className="line"></span>
                                </div>
                                <p className="error-message">
                                    {emailError ? emailError : ""}
                                </p>
                            </div>
                            {/* <div className="col">
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name=""
                                        required="required"
                                    />
                                    <span className="text">Mobile</span>
                                    <span className="line"></span>
                                </div>
                            </div> */}
                        </div>
                        {/* className="inputBox textarea" */}
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox textarea">
                                    <textarea
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            setMessageError("");
                                        }}
                                        required
                                    ></textarea>
                                    <span className="text">
                                        Type your message here...
                                    </span>
                                    <span className="line"></span>
                                </div>
                                <p className="error-message">
                                    {messageError ? messageError : ""}
                                </p>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <input
                                    // disabled={isLoading}
                                    type="submit"
                                    value={
                                        isLoading ? "Sending..." : "Contact us"
                                    }
                                    // value="Contact us"
                                    // onClick={handleSubmit}
                                />
                            </div>
                        </div>
                        
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
