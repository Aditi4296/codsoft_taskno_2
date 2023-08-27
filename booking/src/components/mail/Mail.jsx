import React from "react";
import "./mail.css"

const Mail = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Subcribe to our newsletter!</h1>
            <span className="mailDescription">Get your own personalized choices</span>
            <div className="mailContainer">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Mail