import { restoImagesLink } from "../utils/constants";
import { Link } from 'react-router-dom';

const RestaurantCards = (props) => (
    <div className='restaurant-card'>
        {
            props.mockData.map((data) => (
                <Link to={"/restaurants/"+ data.info.id} key={data.info.id} className="restaurant-link">
                    <div className="restaurant-list">
                        <div className="resto-card">
                            <div className="resto-img">
                                <img src={restoImagesLink + data.info.cloudinaryImageId} />
                            </div>
                            <div className="resto-details">
                                <p>{data.info.name}</p>
                                <div className="reato-rating-del-details">
                                    <span>{data.info.avgRatingString}*</span>
                                    <span>{data.info.sla.slaString}</span>
                                </div>
                                <div className="cusine">
                                    <p>{data.info.cuisines.join(", ")}</p>
                                </div>
                                <div className="location">
                                    <p>{data.info.locality}</p>
                                    <p>{data.info.areaName}</p>
                                </div>
                            </div>
                        </div>            
                    </div>
                </Link>
            ))
        }
    </div>
)

export default RestaurantCards;