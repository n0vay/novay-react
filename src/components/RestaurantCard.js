import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="resturant-card">
      <div className="resturant-img">
        <img
          className="res-logo"
          alt="food-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="resturant-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery time: {sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
