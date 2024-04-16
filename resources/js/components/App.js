import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Blog from "./Blog/Blog";

import Navbar from "./Header/Navbar";
import Pages from "./Pages";
import ScrollToTop from "./ScrollToTop";

// import './css/app.css';


function App() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Navbar />
            {/* <Pages /> */}
           
                <Routes>
            <Route path="/" exact element={<Pages />} />
            
         
            <Route path="/blog" exact element={<Blog />} />
            {/* <Route path="/*" render={() => <div>PAGE NOT FOUND!</div>} /> */}
            </Routes>
           
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
