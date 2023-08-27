import React, { useContext, useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel, faPlane, faCar, faBed, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const Header = ({type})=> {
    const [openCalender, setOpenCalender] = useState(false);
    const [destination, setDestination] = useState("");

    const [openUsers, setOpenUsers] = useState(false)
    const [users, setUsers] = useState({
        adult:1,
        children:0,
        room:1
    });

    const { user } = useContext(AuthContext);

    const [dates, setDates] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);

    const handleUser = (name, operation) => {
        setUsers(prev=>{
            return {
                ...prev, [name]: operation === "i" ? users[name] + 1 : users[name] - 1,
            };
        });
    };

    const { dispatch } = useContext(SearchContext)

    const navigate = useNavigate()

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload:{ destination, dates, users }})
        navigate("/hotels", {state:{ destination,dates,users }})
    }
    
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Hotels</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Hire</span>
                    </div>

                </div>
                { type !== "list" &&
                    <>
                    <h1 className="headerTitle">
                        Where Dreams Find Deluxe Retreats
                    </h1>
                    <p className="headerDescription">
                        Discover curated luxury getaways. Immerse yourself in elegance and embark on unforgettable journeys. Your escape, your way.
                    </p>
                    {!user && <button className="headerButton">Sign in/Register</button>}
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Enter your destination" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                        <span onClick={()=>setOpenCalender(!openCalender)} className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openCalender && (<DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date"
                            minDate={new Date()}
                        />)}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faUser} className="headerIcon" />
                        <span onClick={() => setOpenUsers(!openUsers)} className="headerSearchText">{`${users.adult} adult - ${users.children} children - ${users.room} room`}</span>
                        {openUsers && <div className="users">
                            <div className="usersItem">
                                <span className="usersText">Adult</span>
                                <div className="usersCounter">
                                    <button disabled={users.adult <= 1} className="usersCounterButton" onClick={()=>handleUser("adult", "d")}>-</button>
                                    <span className="usersCounterNumber">{users.adult}</span>
                                    <button className="usersCounterButton" onClick={()=>handleUser("adult", "i")}>+</button>
                                </div>

                            </div>
                            <div className="usersItem">
                                <span className="usersText">Children</span>
                                <div className="usersCounter">
                                    <button disabled={users.children <= 0} className="usersCounterButton" onClick={()=>handleUser("children", "d")}>-</button>
                                    <span className="usersCounterNumber">{users.children}</span>
                                    <button className="usersCounterButton" onClick={()=>handleUser("children", "i")}>+</button>
                                </div>

                            </div>
                            <div className="usersItem">
                                <span className="usersText">Rooms</span>
                                <div className="usersCounter">
                                    <button disabled={users.room <= 1} className="usersCounterButton" onClick={()=>handleUser("room", "d")}>-</button>
                                    <span className="usersCounterNumber">{users.room}</span>
                                    <button className="usersCounterButton" onClick={()=>handleUser("room", "i")}>+</button>
                                </div>

                            </div>
                        </div>
                        }
                        </div>
                        <div className="headerSearchItem">
                        <button className="headerButton" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default Header