import RestaurantCards from "./RestaurantCards";
import { MOCK_DATA } from"../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [mockData, setMockdata] = useState([]);
    const [filterRestaurantCards, setFilterRestaurantCard] = useState([]);
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setMockdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantCard(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const filterRestoCards = () => {
        setMockdata(mockData.filter((item)  => item.info.avgRating >= 4));
    }

    const filterCards = () => {
       const filterRestaurants = mockData.filter((item) => item.info.name.toLowerCase().includes(filterValue.toLowerCase()));
       setFilterRestaurantCard(filterRestaurants);
    }

    return mockData.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="resto-filter-container">
                <button 
                className="filter-btn"
                onClick={filterRestoCards}>
                    Top Rated Restaurants
                </button>
                <div className="filter-conatiner">
                    <input type="text" value = { filterValue } onChange={(e) => setFilterValue(e.target.value)}/>
                    <button className="search-btn" onClick={filterCards}>Search</button>
                </div>
            </div>
            <div style={{marginTop:"32px"}}>
                <RestaurantCards mockData={filterRestaurantCards}/>
            </div>
        </>
    );
}

export default Body;