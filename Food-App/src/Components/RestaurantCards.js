const RestaurantCards = (props) => (
    <div className='restaurant-card'>
        {
            props.mockData.map((data) => (
                <div className="restaurant-list">
                    <a href="#">
                        <div className="resto-card">
                            <div className="resto-img">
                                <img src={data.restoImg}/>
                            </div>
                            <div className="resto-details">
                                <p>{data.restoName}</p>
                                <div className="reato-rating-del-details">
                                    <span>{data.rating}</span>
                                    <span>{data.deliveryTime} mins</span>
                                </div>
                                <div className="cusine">
                                    <p>{data.Cuisines}</p>
                                </div>
                                <div className="location">
                                    <p>{data.location}</p>
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