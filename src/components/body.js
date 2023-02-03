import restrautList from '../constant.js';
import RestrauntCard from './restaurant_card.js';
import { useState, useEffect } from 'react';
import Shimmer from './shimmer';
import {Link} from 'react-router-dom';
import { filterData } from '../utils/helper.js';
import useOnline from '../utils/useOnline';

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
export default Body = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants , setfilteredRestaurants] = useState([]);
    const [allRestaurants , setAllRestaurants] = useState([]);

    // useEffect is called after every render
    // useEffect is called when dependency array is changed
    // If dependency array is empty, useEffect is called only once.
    useEffect(() => {
     // API call
     fetchRestaurants();
    }, 
    [] // dependency array
    );

   async function fetchRestaurants() {
      var data = await fetch(' https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
      var json = await data.json();
      setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // custom hook
    online = useOnline();

    if(online == false){
      return <h1> you are offline... </h1>
    }

    if(!allRestaurants){
      return null;
    }


    return allRestaurants?.length == 0 ? <Shimmer /> : (
        <>
        <div className='search-container p-5'>
            <input type='text' 
            className='border-2 p-1 w-96 rounded-md h-12'
            placeholder='search' 
            value = {searchText}
            onChange = {(e) => {
                setSearchText(e.target.value);
            }}
            />

            <button className='p-2 m-2 bg-slate-500 rounded-md text-white h-12 hover:bg-slate-300' onClick={() => {
                const filteredRestaurants =  filterData(searchText, allRestaurants);
                console.log(filteredRestaurants)
                setfilteredRestaurants(filteredRestaurants);
            }}> search </button>  
        </div>

    {
    filteredRestaurants.length == 0 ? 
    <h1>No restaurants found...</h1> :   
     <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
         return(  <Link key={restaurant.data.id} to={'/restaurant/' + restaurant.data.id}>
           <RestrauntCard {...restaurant.data}  />
          </Link>
         )
        })}
      </div>
      }
      </>
    );

  };

  