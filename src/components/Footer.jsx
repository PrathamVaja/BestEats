import React from 'react'
import {data} from '../data/data'

const Footer = () => {
  console.log(data);
  return (
    <div>
      <h1 className='font-bold text-3xl pt-10 text-center text-orange-600'>Nice To Meet U 😊😊 !!!</h1>
      <div className='flex pt-12 justify-evenly'>
        <img  className='max-h-44' src="https://media.istockphoto.com/id/1314333578/photo/delivery-man-riding-a-motorcycle-with-delivery-box-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=ujpgUt_Cbig_mDr6LroY4HForxGS6n6Mxw1K4BSgq9s=" alt="" />
        <img className='max-h-44 ' src="https://media.istockphoto.com/id/1462201340/photo/3d-illustration-of-courier-holding-box-stand-next-to-motor-scooter-logistics-concept-with.jpg?s=2048x2048&w=is&k=20&c=61Rq5e2yGGrRsNg5r09jCAEjjnTVMZ862hQ0DIyzJS0=" alt="" />
      </div>
    </div>
    
  )
}

export default Footer
