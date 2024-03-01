import Card from './Card'
import { restaurantList } from "../config";
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

function filterData(searchTxt,restaurants){
    // setRestaurants(restaurantList);
    const filterData=restaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase().includes(searchTxt?.toLowerCase())
    );
    return filterData;
}
const Body=()=>{
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchTxt,setSearchTxt]=useState();

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        const dataFinal=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(dataFinal);
        setFilteredRestaurants(dataFinal);
    }


    if(!allRestaurants)return null;

    return (allRestaurants?.length ==0) ? (<Shimmer/>):(
        <>
        <div className='search-container'>
            <input
            type='text'
            className='search-input'
            placeholder='Search'
            value={searchTxt}
            onChange={(e)=>setSearchTxt(e.target.value)}
            />
        <button className='btn'
        onClick={()=>{
            //Need to filter data
            //Update the list
            const data = filterData(searchTxt,allRestaurants);
            setFilteredRestaurants(data);
        }}
        >search</button>
        </div>
        <div className='restaurant-list'>{
            filteredRestaurants.map((restaurant)=> {
                return <Card {...restaurant.info} key={restaurant.info.id}/>
            })
        }
        </div>
        </>
    )
}
export default Body;