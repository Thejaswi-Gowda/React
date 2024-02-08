import RestaurantCards from "./RestaurantCards";
import { MOCK_DATA } from"../utils/constants";
import { useState } from "react";

const Body = () => {
    const [mockData, setMockdata] = useState(MOCK_DATA);
    const filterRestoCards = () => {
        setMockdata(mockData.filter((item)  => item.ratingValue >= 4))
    }
    return (
        <>
            <button 
            className="filter-btn"
            onClick={filterRestoCards}>
                Filter
            </button>
            <div style={{marginTop:"32px"}}>
                <RestaurantCards mockData={mockData}/>
            </div>
        </>
    )
}

export default Body;