
import ResturantCard from "../RestroCard/ResturantCard";
import resData from "../../utils/mockData";
import { use, useEffect, useState } from "react";

const Body = () => {
    const [restroList, setRestroList] = useState(resData);
    const [searchValue] = useState("");
    const handleSearch = (e) => {
        return (
                console.log(e)
        );
    }

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9136&lng=75.7858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = data.json();
        console.log(json)
    }
     
    return (
        <div className='body'>
                <div className="SearchBox">
                    <input className="search" id="search" type="text" onInput ={(e) => handleSearch}/>
                    <button className="search-btn" onClick={() => {
                        setRestroList(restroList);
                        const searchWrittenValue = document.getElementById('search').value;
                        const filteredRetroSerachList = restroList?.filter((res) => res?.info?.name.includes(searchWrittenValue))
                        setRestroList(filteredRetroSerachList);
                    }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                      const filteredRestroList =  restroList.filter((res) => res?.info?.avgRating > 4.2)
                      setRestroList(filteredRestroList);
                    }}>Top Rated Resturant</button>
                </div>
            <div className='res-container'>
                {restroList && restroList?.map((restro) => (
                    <ResturantCard key={restro?.info?.id}
                        resData={restro}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;