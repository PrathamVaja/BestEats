import React, { useState } from 'react'
import {data} from '../data/data.js'

const MenuFood = () => {
    // console.log(data)
    const [foods,setFoods] = useState(data)
    
    

    //Filter Type burger/pizza/cake etc
    const filterType = (category)=>{
        setFoods(
                data.filter((item)=>{
                    return item.category === category;
                })
        )   

    };

    const filterPrice = (price)=>{
        setFoods(
          data.filter((item) => {
            return item.price === price;
          })
        )
    };

  return (    
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Iteams</h1>  
        {/* Filter row*/}  
        <div className='flex flex-col lg:flex-row justify-between '>
             {/* Filter Type*/} 
             <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap '>
                <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={() => filterType('Cake')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Cake</button>
                <button onClick={() => filterType('Pizza')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={() => filterType('Burger')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                </div>
             </div>
              {/* Filter price*/} 
              <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                </div>
                
             </div>
            
        </div> 

        {/*Display images */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=> (               
                
               <div key={index } className='border shadow-2xl rounded-lg  hover:scale-110 duration-500'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />

                    <div className='flex font-bold justify-between px-2 py-4'>
                        <p>{item.name}</p>
                        <p>
                            <span className='bg-orange-600 p-1 text-white rounded-full'>{item.price}</span>
                        </p>
                    </div>
               </div>
            ))}
        </div>
      
    </div>
  )
}

export default MenuFood
