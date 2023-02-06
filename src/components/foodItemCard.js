export default FoodItemCard = ({
    name,
    description,
    cloudinaryImageId,
    price,
  }) => {
    return (
      <div className='w-56 p-2 m-2 shadow-lg'>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-2xl">{name}</h2>
        <h4>Rupees: { price} </h4>
      </div>
    );
  };