import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import { RES_URL } from "../utils/constants";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    setResData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResData(resData.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resturant-container">
        {resData &&
          resData.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
