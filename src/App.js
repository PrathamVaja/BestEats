import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import MenuFood from "./components/MenuFood";
import Footer from "./components/Footer";



function App() {

  
  return (
   <div>
    <Navbar />
    <Hero/>
    <div className="grid md:grid-cols-3   lg:grid-cols-4 ">

    <HeadlineCards name='Burger With Sliced Vegetables' through='Through 9/23' src='https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <HeadlineCards name='Cheese Pizza Yamee!!!' through='Through 6/23' src='https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    <HeadlineCards name='Pancake With Sliced Strawberry' through='Through 5/20' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>   
    <HeadlineCards name='Fries With Leaves Dish Spaicy' through='Through 8/25' src='https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg'/>
    <HeadlineCards name='Cooked Pasta on Wooden Bowl' through='Through 4/20' src='https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    </div>
    <MenuFood />
    <Footer/>
   </div>
  );
}

export default App;
