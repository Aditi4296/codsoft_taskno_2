import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

const Featured = ()=> {

    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=Pune,Delhi,Chennai")

    return (
        <div className="featured">
            {loading ? ("Loading please wait") : (<><div className="featuredItem">
                <img src="https://lh3.googleusercontent.com/p/AF1QipPHYa1nOS1MZf9-Dj_gdV1dmcNs4MTF__BOdpcL=s1360-w1360-h1020" alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Pune</h1>
                    <h2>{data[0]} properties</h2>
                </div> 
            </div>
            <div className="featuredItem">
                <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Delhi</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://blog.thomascook.in/wp-content/uploads/2018/07/img-7-e1531194581524.jpg" alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Chennai</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div></>)}
        </div>
    )
}

export default Featured