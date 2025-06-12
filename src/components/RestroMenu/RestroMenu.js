import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import RestaurantCategory from "../RestaurantCategory";

const RestroMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestrauntMenu(resId);
    
    if (resInfo === null) return <Shimmer />;
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const  finalCard  = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const itemDetail = finalCard?.itemCards;
   

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
           {categories.map((category, index) => 
                <RestaurantCategory key={index} data={category?.card?.card}/>
           )}
        </div>
    );
};

export default RestroMenu;