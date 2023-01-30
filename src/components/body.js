import restrautList from '../constant.js';
import RestrauntCard from './restaurant_card.js';
import { useState } from 'react';


function filterData (searchtext, restaurants) {
    if(searchtext.trim() == ''){
      return restaurants;
    }

  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchtext) );
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
export default Body = () => {
    const [searchText, setSearchText] = useState('');
    const [restaurants , setRestaurants] = useState(restrautList);

 

    return (
        <>
        <div className='search-container'>
            <input type='text' 
            className='search-input'
            placeholder='search' 
            value = {searchText}
            onChange = {(e) => {
                setSearchText(e.target.value);
               const filteredRestaurants =  filterData(searchText, restrautList);
               console.log(filteredRestaurants)
               setRestaurants(filteredRestaurants);
            }}
            />

            <button> search </button>  
        </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </>
    );
  };

  