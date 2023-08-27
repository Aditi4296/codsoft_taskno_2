import React, { useContext, useState } from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Mail from "../../components/mail/Mail"
import Footer from "../../components/footer/Footer"
import { faCircleArrowLeft, faCircleArrowRight, faCircleCheck, faCircleXmark, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFetch from "../../hooks/useFetch.js"
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../components/reserve/Reserve'

const Singlehotel = ()=> {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [slideNumber, setSlideNumber] = useState(0);
    const [slideOpen, setSlideOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const {data, loading, error } = useFetch(`http://localhost:8800/api/hotels/find/${id}`)
    
    const { dates, users } = useContext(SearchContext);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    console.log(dates);
    console.log(users);

    const MILLISECONDS_PER_DAY = 1000*60*60*24;
    function dayDifference(date1,date2)
    {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
        const daysDiff = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return daysDiff;
    }

    const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate)

    const handleArrows = (direction) => {
        let newSlide;
        if(direction === "left"){
            newSlide = slideNumber === 0 ? 5 : slideNumber-1
        }else{
            newSlide = slideNumber === 5 ? 0 : slideNumber+1
        }

        setSlideNumber(newSlide)
    }

    const handleSlider = (index) => {
        setSlideNumber(index);
        setSlideOpen(true);
    }

    const handleClick = () => {
        if(user){
            setOpenModal(true);
        }else{
            navigate("/login")
        }
    }

    

    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? ("Loading please wait...") : (<><div className="hotelContainer">
                {slideOpen && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="closeMark" onClick={()=>setSlideOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleArrows("left")}/>
                    <div className="sliderWrapper">
                        <img src={data.photos[slideNumber]} alt="" className="sliderImage" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleArrows("right")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="book">Book Now!</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                        <span>{data.address}</span>

                    </div>
                    <span className="hotelDistance">{data.distance} from Indira Gandhi International Airport</span>
                    <span className="hotelPriceHighlight">Book a stay over ₹{data.cheapestPrice} and get free vehicle services</span>
                    <div className="hotelImages">
                        {data.photos?.map((photo,index)=>(
                            <div className="hotelImageWrapper">
                                <img onClick={()=>handleSlider(index)} src={photo} alt="" className="hotelImage" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDescription">
                                {data.description}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a holiday stay!</h1>
                            <span>
                            Book @ ₹0
                            Risk Free Booking!
                            
                            </span>
                            <h2>
                                <b>₹{days * data.cheapestPrice * users.room }</b> ({days} nights)
                            </h2>
                            <button onClick={handleClick}>Book Now</button>
                        </div>
                    </div>
                </div>
                <Mail />
                <Footer />
            </div>
            </>
            )}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
        </div>
    )
}

export default Singlehotel