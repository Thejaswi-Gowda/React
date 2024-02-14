import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import useMenuData from "../utils/useMenuData";

const Body = () => {    
    const {
        restaurantData,
        filterRestaurantCards,
        setFilterValue,
        filterValue,
        filterTopRatedRestaurants,
        filterMenuData,
        isLoading,
    } = useMenuData();

    return isLoading ? (
        <Shimmer />
    ) : (
        <>
            <div className="resto-filter-container">
                <button 
                className="filter-btn"
                onClick={filterTopRatedRestaurants}>
                    Top Rated Restaurants
                </button>
                <div className="filter-conatiner">
                    <input type="text" value = { filterValue } onChange={(e) => setFilterValue(e.target.value)}/>
                    <button className="search-btn" onClick={filterMenuData}>Search</button>
                </div>
            </div>
            <div style={{marginTop:"32px"}}>
                <RestaurantCards mockData={filterRestaurantCards}/>
            </div>
        </>
    );
}

export default Body;