import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restoImagesLink } from "../utils/constants";

const MenuPage = () => {

    const [menu, setMenu] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=464509&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    
    if(menu === null) return <Shimmer />;

    const {title, itemCards} = menu[2]?.card?.card;
    
    return (
        <div className="resto-menu-container">
            <div className="resto-data">
                <h3>{title} - ({itemCards.length})</h3>
            </div>
                {
                    itemCards.map((item) => {
                        return (
                            <div className="resto-info">
                                <div className="food-info">
                                    <p className="food-name">{item.card.info.name}</p>
                                    <p className="food-price">${item.card.info.price/100}</p>
                                    <p className="food-description">{item.card.info.description}</p>
                                </div>
                                <div className="food-img">
                                    <img src={restoImagesLink + item.card.info.imageId}/>
                                </div>
                            </div>
                        )
                    })
                };
        </div>
    )
}

export default MenuPage;