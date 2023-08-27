import React from "react";
import "./likedProperties.css"
import useFetch from "../../hooks/useFetch";

const LikedProperties = () => {

    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true&limit=6")


    return(
        // <div className="likedProperties">
        //     {loading ? ("Loading please wait...") : <>
        //     {data.map(item=>(<div className="likedPropertiesItem" key={item._id}>
        //         <img src={item.photos[0]} alt="" className="likedPropertiesImage" />
        //         <span className="likedPropertiesName">{item.name}</span>
        //         <span className="likedPropertiesCity">{item.city}</span>
        //         <span className="likedPropertiesPrice">₹{item.cheapestPrice}</span>
        //         {item.rating && <div className="likedPropertiesRating">
        //             <button>{item.rating}</button>
        //             <span>Very Good</span>
        //         </div>}
        //     </div>))}
        //     </>}
        // </div>
        <div className="likedProperties">
      <div className="likedPropertiesItem">
        <img
          src="https://m.lemontreehotels.com/getattachment/90249e1c-086e-42cb-967c-86353c7172e1/Banner-Three.aspx"
          alt=""
          className="likedPropertiesImage"
        />
        <span className="likedPropertiesName">Hotel LemonTree</span>
        <span className="likedPropertiesCity">Pune</span>
        <span className="likedPropertiesPrice">Starting from ₹1200</span>
        <div className="likedPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="likedPropertiesItem">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNyEaHjtRnfKKFi3E4-3haYzmj5JAqC-PwXS8mz=w296-h202-n-k-rw-no-v1"
          alt=""
          className="likedPropertiesImage"
        />
        <span className="likedPropertiesName">Brijwasi Lands Inn</span>
        <span className="likedPropertiesCity">Mathura</span>
        <span className="likedPropertiesPrice">Starting from ₹1400</span>
        <div className="likedPropertiesRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="likedPropertiesItem">
        <img
          src="https://r1imghtlak.mmtcdn.com/af953d3cd99311eb82c30242ac110002.jpeg?&output-quality=75&downsize=243:162&crop=243:162;0,10&output-format=jpg"
          alt=""
          className="likedPropertiesImage"
        />
        <span className="likedPropertiesName">Hotel Odyssey</span>
        <span className="likedPropertiesCity">Pune</span>
        <span className="likedPropertiesPrice">Starting from ₹1350</span>
        <div className="likedPropertiesRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="likedPropertiesItem">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNKN-9Tm5Z-50d-GGbTwuLBraHfN19PSJoFhOE7=w296-h202-n-k-rw-no-v1"
          alt=""
          className="likedPropertiesImage"
        />
        <span className="likedPropertiesName">Holiday Inn</span>
        <span className="likedPropertiesCity">Delhi</span>
        <span className="likedPropertiesPrice">Starting from ₹1050</span>
        <div className="likedPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="likedPropertiesItem">
        <img
          src="
          https://r1imghtlak.mmtcdn.com/e7af0dbcc29e11eb8cf70242ac110006.jpg?&output-quality=75&downsize=243:162&output-format=jpg"
          alt=""
          className="likedPropertiesImage"
        />
        <span className="likedPropertiesName">Guest House Hotel</span>
        <span className="likedPropertiesCity">Noida</span>
        <span className="likedPropertiesPrice">Starting from ₹1800</span>
        <div className="likedPropertiesRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="likedPropertiesItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0b/a2/64/trident-udaipur.jpg?w=300&h=300&s=1"
          alt=""
          className="likedPropertiesImage"
        />
        <span className="likedPropertiesName">Hotel Garden Inn</span>
        <span className="likedPropertiesCity">Bangalore</span>
        <span className="likedPropertiesPrice">Starting from ₹2500</span>
        <div className="likedPropertiesRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
    )
}

export default LikedProperties