import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resData, setResData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            setDisplayData(resData.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resturant-container">
        {displayData.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
