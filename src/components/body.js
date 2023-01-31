import restrautList from '../constant.js';
import RestrauntCard from './restaurant_card.js';
import { useState, useEffect } from 'react';
import Shimmer from './shimmer';


function filterData (searchtext, restaurants) {
    if(searchtext.trim() == ''){
      return restaurants;
    }

  return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchtext?.toLowerCase()) );
}

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

    if(!allRestaurants){
      return null;
    }


    return allRestaurants?.length == 0 ? <Shimmer /> : (
        <>
        <div className='search-container'>
            <input type='text' 
            className='search-input'
            placeholder='search' 
            value = {searchText}
            onChange = {(e) => {
                setSearchText(e.target.value);
            }}
            />

            <button onClick={() => {
                const filteredRestaurants =  filterData(searchText, allRestaurants);
                console.log(filteredRestaurants)
                setfilteredRestaurants(filteredRestaurants);
            }}> search </button>  
        </div>

    {
    filteredRestaurants.length == 0 ? 
    <h1>No restaurants found...</h1> :   
     <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      }
      
      </>
    );

  };

  