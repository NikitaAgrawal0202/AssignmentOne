
import ResturantCard, {withPromotedLabel} from "../RestroCard/ResturantCard";
import resData from "../../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router";
import useOnline from "../../utils/useOnline";

const Body = () => {
    const [restroList, setRestroList] = useState([]);
    const [filteredRestro, setFilterRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        return (
                console.log(e)
        );
    }

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9136&lng=75.7858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const data = resData;
        // const json = data.json();
        setRestroList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestro(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus = useOnline();
    const ResturantPromotedCard = withPromotedLabel(ResturantCard);

    if (onlineStatus === false)
        return (<h1>Looks like you're offline!! Please check your internet connection</h1>);
    
     
    return restroList?.length === 0 ? <Shimmer /> : (
        <div className='body'>
                <div className="flex">
                <div className="m-4 p-4">
                    <input className="border border-solid border-black" id="search" value={searchText} type="text" onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 rounded-lg bg-green-100 m-4" onClick={() => {
                        const filteredRetroSerachList = restroList?.filter((res) => res?.info?.name.toLowerCase()?.includes(searchText?.toLowerCase()))
                        setFilterRestro(filteredRetroSerachList);
                    }}>
                        Search
                    </button>
                </div>
                  <div className="m-4 p-4 flex items-center">
                      <button className="px-4 py-2 rounded-lg bg-gray-100" onClick={() => {
                      const filteredRestroList =  restroList.filter((res) => res?.info?.avgRating > 4.2)
                      setRestroList(filteredRestroList);
                    }}>Top Rated Resturant</button>
                  </div>
                </div>
            <div className='res-container flex flex-wrap'>
                {filteredRestro && filteredRestro?.map((restro, index) => (
                   <Link to={"/restaurant/"+restro?.info?.id} key={index}>
                   {restro?.info?.promoted ? 
                 <ResturantPromotedCard resData={restro} /> 
                 : 
                    <ResturantCard
                        resData={restro}
                    />
                 } 
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;