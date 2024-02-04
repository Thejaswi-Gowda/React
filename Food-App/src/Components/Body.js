import RestaurantCards from "./RestaurantCards";
import { MOCK_DATA } from"../utils/constants";

const Body = () => (
    <div style={{marginTop:"32px"}}>
        <RestaurantCards mockData={MOCK_DATA}/>
    </div>
)

export default Body;