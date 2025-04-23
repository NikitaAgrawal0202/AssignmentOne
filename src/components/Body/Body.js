
import ResturantCard from "../RestroCard/ResturantCard";
import resData from "../../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [restroList, setRestroList] = useState([]);
    console.log(useState(["nikita"]))
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
     
    return restroList?.length === 0 ? <Shimmer /> : (
        <div className='body'>
                <div className="filter">
                <div className="SearchBox">
                    <input className="search-box" id="search" value={searchText} type="text" onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="search-btn" onClick={() => {
                        const filteredRetroSerachList = restroList?.filter((res) => res?.info?.name.toLowerCase()?.includes(searchText?.toLowerCase()))
                        setFilterRestro(filteredRetroSerachList);
                    }}>
                        Search
                    </button>
                </div>
                    <button className="filter-btn" onClick={() => {
                      const filteredRestroList =  restroList.filter((res) => res?.info?.avgRating > 4.2)
                      setRestroList(filteredRestroList);
                    }}>Top Rated Resturant</button>
                </div>
            <div className='res-container'>
                {filteredRestro && filteredRestro?.map((restro, index) => (
                   <Link to={"/restaurant/"+restro?.info?.id} key={index}>
                    <ResturantCard
                        resData={restro}
                    />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;