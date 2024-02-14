import Shimmer from "./Shimmer";
import { restoImagesLink } from "../utils/constants";
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from "../utils/useRestaurantsMenu";

const MenuPage = () => {

    const { resId } = useParams();
    const menu = useRestaurantsMenu(resId);
    
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
                            <div className="resto-info" key={item.card.info.id}>
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