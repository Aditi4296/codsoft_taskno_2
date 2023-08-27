import React from "react";
import "./searchItem.css"
import { Link } from "react-router-dom";



const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img src="https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201808311550309792-c0552154598d11eb9ef70242ac110002.jpg?output-quality=75&downsize=328:180&output-format=webp" alt="" className="searchItemImage" />
            <div className="searchItemDescription">
                <h1 className="searchItemTitle">{item.name}</h1>
                <span className="searchItemDistace">{item.distance} from Indira Gandhi International Airport</span>
                <span className="searchItemTaxi">Free airport taxi</span>
                <span className="searchItemSubtitle">Refined comfort with scenic views</span>
                <span className="searchItemFeatures">{item.description}</span>
                <span className="searchItemCancel">Free Cancellation</span>
                <span className="searchItemCancelSubtitle">Flexible bookings with hassle-free cancellation!</span>
            </div>
            <div className="searchItemDetails">
                {item.rating && <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="searchItemDetailsTexts">
                    <span className="searchItemPrice">₹{item.cheapestPrice}</span>
                    <span className="searchItemTax">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="searchItemCheck">Book Now</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default SearchItem