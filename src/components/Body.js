import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import constList from "../utils/mockdata";

const constData = {
  info: {
    id: "393840",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Chikka Lakshmaiah Layout",
    areaName: "Adugodi",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.1,
    parentId: "61955",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 2.5,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-04-19 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
};

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  let resList = [];
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    resList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(resList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      {/* <div className="search"> Search </div> */}
      <div className="resturant-container">
        <ResturantCard resData={constData} />
        {resList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
        {/* {constList.map((resturant) => (
          <ResturantCard key = {resturant.info.id} resData={resturant} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
