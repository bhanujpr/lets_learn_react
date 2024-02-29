import Card from './Card'
import { restaurantList } from "../config";
import { useState } from 'react';

const Body=()=>{
    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchTxt,setSearchTxt]=useState();
    function filterData(searchTxt,restaurants){
        // setRestaurants(restaurantList);
        const filterData=restaurantList.filter((restaurant)=>
        restaurant.info.name.includes(searchTxt)
        );
        return filterData;
    }
    return(
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
            const data = filterData(searchTxt,restaurants);
            setRestaurants(data);
        }}
        >search</button>
        </div>
        <div className='restaurant-list'>{
            restaurants.map((restaurant)=> {
                return <Card {...restaurant.info} key={restaurant.info.id}/>
            })
        }
        </div>
        </>
    )
}
export default Body;