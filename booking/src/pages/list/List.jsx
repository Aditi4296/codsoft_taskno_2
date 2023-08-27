import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from "../../hooks/useFetch"

const List = ()=> {
    const location = useLocation()

    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.dates)
    const [users, setUsers] = useState(location.state.users)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    const [openCalender, setOpenCalender] = useState(false)

    const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

    const handleClick = ()=>{
        reFetch();
    }

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listSearchItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="listSearchItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenCalender(!openCalender)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openCalender && (<DateRange onChange={item=>setDates([item.selection])}
                            minDate={new Date()}
                            ranges={dates}
                            />)}
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="">Filters</label>
                            <div className="listSearchFilters">

                            <div className="listSearchOptionItem">
                                <span className="listOptionText">Min Price <small>per night </small></span>
                                <input type="number" onChange={e=>setMin(e.target.value)} className="listSearchOptionInput" />
                            </div>
                            <div className="listSearchOptionItem">
                                <span className="listOptionText">Max Price <small>per night </small></span>
                                <input type="number" onChange={e=>setMax(e.target.value)} className="listSearchOptionInput" />
                            </div>
                            <div className="listSearchOptionItem">
                                <span className="listOptionText">Adult </span>
                                <input type="number" min={1} className="listSearchOptionInput" placeholder={users.adult}/>
                            </div>
                            <div className="listSearchOptionItem">
                                <span className="listOptionText">Children </span>
                                <input type="number" min={0} className="listSearchOptionInput" placeholder={users.children}/>
                            </div>
                            <div className="listSearchOptionItem">
                                <span className="listOptionText">Rooms </span>
                                <input type="number" min={1} className="listSearchOptionInput" placeholder={users.room}/>
                            </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? ("Loading please wait...") : ( <>
                        {data.map(item =>(
                            <SearchItem item={item} key={item._id}/>
                        ))}
                        
                        </>
                        )}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default List