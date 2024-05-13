import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto shadow-lg p-4 my-4 bg-gray-200">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ⬇️ </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
