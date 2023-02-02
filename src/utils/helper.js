export function filterData (searchtext, restaurants) {
    if(searchtext.trim() == ''){
      return restaurants;
    }

  return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchtext?.toLowerCase()) );
}