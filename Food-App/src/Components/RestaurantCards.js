const RestaurantCards = (props) => (
    <div className='restaurant-card'>
        {
            props.mockData.map((data) => (
                <div className="restaurant-list" key={data.info.id}>
                    <a href="#">
                        <div className="resto-card">
                            <div className="resto-img">
                                <img src={data.info.cloudinaryImageId}/>
                            </div>
                            <div className="resto-details">
                                <p>{data.restoName}</p>
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
            ))
        }
    </div>
)

export default RestaurantCards;