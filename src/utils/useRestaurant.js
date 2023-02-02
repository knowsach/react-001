import { useState , useEffect} from "react";
import {FETCH_URL} from '../constant';

// custom hook
const useRestaurant =   (id) => {
    const [restaurant , setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantDetail();
    }, []);

    async function getRestaurantDetail() {
         var data = await fetch( FETCH_URL + id);
         var json = await data.json();
         setRestaurant(json.data);
    }

    return restaurant;
}

export default useRestaurant;