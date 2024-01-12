// import React from "react";
import React from 'react';
// Import Swiper styles

const ProductCart = ({ item }) => {
  return (
  
    <div className='border-3 m-3 shadow-lg shadow-indigo-500/40 '>
      <img src={item.imgUrl} alt="" />
      <div className='py-5 px-5'>
 
      <h3  className="font-semibold">{item.productName}</h3>
      <h3 className="text-lime-800 font-medium">Price:{item.price} AZN</h3>
      <p className="text-indigo-700 font-medium">Category:{item.category}</p>
    <button className='text-white bg-black px-4 py-2 rounded-full '>+</button>
    <span className='font-semibold'> ADD</span>
      </div>
    </div>



  );
};

export default ProductCart;
