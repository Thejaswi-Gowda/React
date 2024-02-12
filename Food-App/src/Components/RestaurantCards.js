import { restoImagesLink } from "../utils/constants";
import { Link } from 'react-router-dom';

const RestaurantCards = (props) => (
    <div className='restaurant-card'>
        {
            props.mockData.map((data) => (
                <Link to="/restaurants" key={data.info.id}>
                    <div className="restaurant-list">
                        <a href="#">
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
                                        <p>{data.info.cuisines}</p>
                                    </div>
                                    <div className="location">
                                        <p>{data.info.locality}</p>
                                        <p>{data.info.areaName}</p>
                                    </div>
                                </div>
                            </div>            
                        </a>
                    </div>
                </Link>
            ))
        }
    </div>
)

export default RestaurantCards;