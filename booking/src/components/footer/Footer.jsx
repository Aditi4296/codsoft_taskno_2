import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLists">
                <ul className="footerList">
                    <li className="footerListItem">Domestic Hotels</li>
                    <li className="footerListItem">International Hotels</li>
                    <li className="footerListItem">Domestic Flights</li>
                    <li className="footerListItem">International Flights</li>
                    <li className="footerListItem">Cab Booking</li>
                    <li className="footerListItem">Destination Planner</li>
                    <li className="footerListItem">Regions</li>
                    <li className="footerListItem">Cities</li>
                </ul>
                <ul className="footerList">
                    <li className="footerListItem">About Us</li>
                    <li className="footerListItem">Terms and Conditions</li>
                    <li className="footerListItem">User Agreement</li>
                    <li className="footerListItem">Privacy</li>
                    <li className="footerListItem">Customer Support</li>
                    <li className="footerListItem">Careers</li>
                    <li className="footerListItem">FAQs</li>
                </ul>
                <ul className="footerList">
                    <li className="footerListItem">Popular Hotels</li>
                    <li className="footerListItem">InnSight Offers</li>
                    <li className="footerListItem">Reviews</li>
                    <li className="footerListItem">Hotels in India</li>
                    <li className="footerListItem">Travel Guide</li>
                </ul>
                <ul className="footerList">
                    <li className="footerListItem">Cheap Hotels</li>
                    <li className="footerListItem">Flight Schedule</li>
                    <li className="footerListItem">Inn Stays</li>
                    <li className="footerListItem">Hotels Near Me</li>
                    <li className="footerListItem">Popular Hotel Chains</li>
                    <li className="footerListItem">Airports</li>
                    <li className="footerListItem">Disricts</li>
                </ul>
            </div>
            <div className="footerText">© 2023 InnSight (India) Private Limited All rights reserved</div>
        </div>
    )
}


export default Footer