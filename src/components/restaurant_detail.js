import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import {IMG_CDN_URL} from '../constant';
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetail = () => {

    // how to read a dynamic url params
    const params = useParams();
    const {id} = params;

    // custom restaurant hook
    const restaurant = useRestaurant(id);
    const dispatch = useDispatch();

    const addFoodItem = (foodItem) =>{
        dispatch(addItem(foodItem))
    }
   
    console.log(restaurant);
    if(restaurant == null ) {
        return <Shimmer />
    }

    return(
        <div className="flex px-5 py-5 w-[700px] ">
            <div>
            <h2 className="text-4xl"> {restaurant?.name} : ({id}) </h2>
            <img className="w-80 py-4" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3> {restaurant?.area}  </h3>
            <h3> {restaurant?.city}  </h3>
            <h3> {restaurant?.avgrating}  </h3>
            <h3> {restaurant?.costForTwoMsg}  </h3>
            </div>
     <div>
        
     </div>
            <div className="px-10">
               <h1 className="text-4xl"> Menu </h1>
               <ul>
               {Object.values(restaurant?.menu?.items).map((item) => {
                   return  <li className="text-gray-500 p-1" key={item?.id}> {item?.name} 
                    <button className="p-1 m-1 bg-green-100"
                   onClick={()=>{addFoodItem(item)}}
                   > Add  </button></li>
                })}
               </ul>
            </div>
            

        </div>
    );
}

export default RestaurantDetail;