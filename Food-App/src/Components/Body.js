import RestaurantCards from "./RestaurantCards";
import { MOCK_DATA } from"../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [mockData, setMockdata] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // strictly use optinal chaining.
        setMockdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json.data.cards);
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const filterRestoCards = () => {
        setMockdata(mockData.filter((item)  => item.ratingValue >= 4))
    }

    // conditional rendering
    // if (mockData.length === 0) {
    //     return <Shimmer />
    // }

    return mockData.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <button 
            className="filter-btn"
            onClick={filterRestoCards}>
                Top Rated Restaurants
            </button>
            <div style={{marginTop:"32px"}}>
                <RestaurantCards mockData={mockData}/>
            </div>
        </>
    )
}

export default Body;