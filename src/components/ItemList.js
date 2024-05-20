import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch Action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-3">
              <span className="">{item.card.info.name} </span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs pr-4">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <button
              className="p-2 bg-white absolute shadow-lg rounded-md"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
