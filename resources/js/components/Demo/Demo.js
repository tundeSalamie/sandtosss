import React, { useState } from "react";

// CSS
import "./demo.css";
import Http from "../Http";

const Demo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [notifire, setNotifire] = useState(false);
    // const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        e.preventDefault();
        setIsLoading(true);
         //console.log(`Name: ${name}\nEmail: ${email}`);

        await Http.post("/signup", {
            name: name,
            email: email,
        })
            .then(function (response) {
                if (response.status === 200) {
                    setIsLoading(false);
                    setName("");
                    setEmail("");
                    setNotifire(true);
                    setTimeout(() => {
                        setNotifire(false);
                    }, 5000);
                    // setErrorMessage("");
                    // setNameError("");
                } 
            })
            .catch(function (error) {
                 console.log(error.response.data);
                setIsLoading(false);
                if (error.response.status === 400) {
                    setErrorMessage(error.response.data.message.email);
                    setNameError(error.response.data.message.name);
                }
                // console.log(error.response.data.message);
            });
    };

    return (
        <div className="demo" id="demo">
            <div className="demo-container">
                <div className="demo-l">
                    <div className="demo-header">
                        <h5>Start Up Here</h5>
                    </div>
                    <div className="demo-content">
                        <h1>We Are Currently <span className="hashtags">#Building</span></h1>
                        <p>
                            We share our updates, stories, events and Business with you. Sign up and be part of this journey.
                        </p>
                    </div>
                    <div className="demo-footer"></div>
                </div>
                <div className="demo-r">
                <form onSubmit={handleSignup} encType="multiple/form-data">
                    <div className="demo-form">
                        <h3>Sign up Here! </h3>
                        {notifire ? (
                            <p>Thank You! An email has been sent to you.</p>
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
                                            setErrorMessage("");
                                        }}
                                        required
                                    />
                                    <span className="text">Email</span>
                                    <span className="line"></span>
                                </div>
                                <p className="error-message">
                                    {errorMessage ? errorMessage : ""}
                                </p>
                            </div>
                        </div>

                        <div className="row100">
                            <div className="col">
                                <input
                                    type="submit"
                                    value={isLoading ? "Sending..." : "Sign up"}
                                    // onClick={handleSignup}
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

export default Demo;
