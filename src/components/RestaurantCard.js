import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="resturant-card m-4 p-4 w-[260px] bg-gray-100 rounded-lg hover:bg-gray-200"
    >
      <div className="resturant-img">
        <img
          className="res-logo rounded-lg"
          alt="food-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="resturant-details">
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery time: {sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

// Higher Order Component
// Input - restaurant Cart -> promoted restaurant Card

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
