import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    setResData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setDisplayData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like you are offline</h1>
      </div>
    );
  }
  console.log(resData);
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-0.5 m-4 bg-blue-300 rounded-md"
            onClick={() => {
              const filteredData = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setDisplayData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn px-4 py-0.5 bg-red-300 rounded-md"
            onClick={() => {
              setDisplayData(resData.filter((res) => res.info.avgRating > 4.3));
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="resturant-container flex flex-wrap">
        {displayData.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant.info.isOpen ? (
              <RestaurantCardPromoted resData={resturant} />
            ) : (
              <RestaurantCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
