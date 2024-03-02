import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";




const RestaurantMenu=()=>{
    const params=useParams();
    const {id}=params;
    const [restaurant,setRestaurant]=useState(null);


    useEffect(()=>{
        getRestaurantMenu();
    });
    
    async function getRestaurantMenu(){
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);
        const json=await data.json();
        setRestaurant(json?.data?.cards?.card?.info);
         console.log(restaurant);
    }




    return(
        <div>
            <h1>Restaurant id:{id}</h1>
            <h2>Namaste g</h2>
        </div>
    )
};

export default RestaurantMenu;