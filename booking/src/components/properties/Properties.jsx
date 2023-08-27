import React from 'react'
import "./properties.css"
import useFetch from '../../hooks/useFetch';

const Properties = ()=> {
    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByType")

    const images = [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/storyimage_647_062215030547.jpg?VersionId=YnK6djlUZOYePaM.Adew5VtjwpX93i4f&size=690:388",
        "https://www.engelvoelkers.com/images/8e1d5576-e715-46a1-8927-e53cf2c37281/modern-villa-in-an-exclusive-development-in-mijas",
        "https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg"
    ];
    return (
        <div className="propertiesList">
            {loading ? (
                "Loading please wait..."
                ) : (
                <>
                {data && data.map((img,i)=>(
                <div className="propertiesListItem" key={i}>
                <img src={images[i]} alt="" className="propertiesListImage" />
                <div className="propertiesTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
            </div>))}
            </>
            )}
            
        </div>
    )
}

export default Properties