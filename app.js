import React from "react";
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import HeadlineCards from "./src/components/HeadlineCards";
import FoodCart from "./src/components/FoodCart";
import Category from "./src/components/Category";

const AppLayout=()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <FoodCart/>
        <Category/>
        
        </>
    )
}
const createElem=ReactDOM.createRoot(document.getElementById("root"))

createElem.render(AppLayout())