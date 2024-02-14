import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useMenuData = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filterRestaurantCards, setFilterRestaurantCard] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_API);
            const json = await data.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurantData(restaurants);
            setFilterRestaurantCard(restaurants);
            setIsLoading(false);
        } catch (error) {
            <h2>Error Fetching Data: {error}</h2>
            setIsLoading(false);
        }
    };

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = filterRestaurantCards.filter((item) => item?.info?.avgRating >= 4.2);
        setFilterRestaurantCard(topRatedRestaurants);
    }

    const filterMenuData = () => {
       const filterRestaurants = restaurantData.filter((item) => item?.info?.name.toLowerCase().includes(filterValue.toLowerCase()));
       setFilterRestaurantCard(filterRestaurants);
    }

    return {
        restaurantData,
        filterRestaurantCards,
        setFilterValue,
        filterValue,
        filterTopRatedRestaurants,
        filterMenuData,
        isLoading,
    };
};

export default useMenuData;