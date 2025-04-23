import { useEffect, useState } from "react";
import resMenu from "../../utils/restroMenuMockData";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";

const RestroMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = () => {
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.839612510827962&lng=75.7946448762046&restaurantId="+resId);
        // const json = await data.json();
        const data = resMenu;
        setResInfo(data);
    }
   
    if (resInfo === null) return <Shimmer />;
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const  finalCard  = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const itemDetail = finalCard?.itemCards;

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <ul>
               
                {itemDetail?.map((item) => (
                   <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.defaultPrice || item?.card?.info?.price) / 100}</li>
                ))}
                {/* <li>Briyani</li>
                <li>Burger</li> */}
                {/* <li>Diet Coke</li> */}
            </ul>
        </div>
    );
};

export default RestroMenu;