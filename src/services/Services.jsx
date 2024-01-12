import React from 'react'
import serviceData  from'../assets/data/serviceData'
const Services = () => {
  return (
    <section className='services'>
        <div className="container mx-auto px-4 mt-5">
    <div className="grid grid-cols-4 gap-2 ">
        {serviceData.map((item,index)=>(
            <div key={index}style={{background:`${item.bg}`}} className='py-3 px-2.5 rounded-2xl text-center'>
                <i style={{fontSize:"30px"}} className={item.icon} ></i>
                <h3 className='font-bold'>{item.title}</h3>
                <p>{item.subtitle}</p>
               
            </div>
        ))}

    </div>
        </div>
    </section>
  )
}

export default Services