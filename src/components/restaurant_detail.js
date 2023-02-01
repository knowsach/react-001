import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import {IMG_CDN_URL} from '../constant';
import Shimmer from "./shimmer";

const RestaurantDetail = () => {

    // how to read a dynamic url params
    const params = useParams();
    const {id} = params;

    const [restaurant, setRestaurant] = useState(null);
   
    useEffect(() => {
        getRestaurantDetail();
    }, []);

    async function getRestaurantDetail() {
         var data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + id);
         var json = await data.json();
         setRestaurant(json.data);
    }

    console.log(restaurant);
    if(restaurant == null ) {
        return <Shimmer />
    }

    return(
        <div className="menu">
            <div>
            <h1> Restaurants id : {id} </h1>
            <h2> {restaurant?.name}  </h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3> {restaurant?.area}  </h3>
            <h3> {restaurant?.city}  </h3>
            <h3> {restaurant?.avgrating}  </h3>
            <h3> {restaurant?.costForTwoMsg}  </h3>
            </div>
     
            <div>
               <h1> Menu </h1>
               <ul>
               {Object.values(restaurant?.menu?.items).map((item) => {
                   return  <li key={item?.id}> {item?.name} </li>
                })}
               </ul>
             
            </div>
            

        </div>
    );
}

export default RestaurantDetail;