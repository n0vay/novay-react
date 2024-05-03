import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(categories);
  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl m-6">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {categories.map((category) => (
        <RestaurantCategory data={category.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
