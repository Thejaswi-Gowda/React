import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restoImagesLink } from "../utils/constants";
import { useParams } from 'react-router-dom';
import { MENU_API } from "../utils/constants";

const MenuPage = () => {

    const [menu, setMenu] = useState(null);

    const { resId } = useParams();

    console.log(resId);
    
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_API
            + resId +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
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
                                    <p className="food-price">${
                                        (item?.card?.info?.price / 100) || 
                                        (item?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]?.price) || 
                                        (item?.card?.info?.variantsV2?.pricingModels[0]?.price / 100)
                                    }</p>
                                    <p className="food-description">{item.card.info.description}</p>
                                </div>
                                <div className="food-img">
                                    <img src={restoImagesLink + item.card.info.imageId}/>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default MenuPage;