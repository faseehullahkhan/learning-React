import React from "react";
import Section1 from "./Components/Section1/section1";
import Section2 from "./Components/Section2/Section2";

const App = () => {
  const btnClicked = ()=>{
    console.log("ASD")
  }
  const mouseEntered = ()=>{
    console.log("FEA")
  }
  const likhraha = (value)=>{
    console.log(`mujhy user ka naam mil gaya =  ${value}`)
  }
  const users = [
    {
      img: "https://i.pinimg.com/736x/d1/5e/bb/d15ebb84ecd86da52d5ae9fc100997e7.jpg",
      intro:
        "Prime Customers that have access to bank credit and are satisfied with the current product",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "lightseagreen",
      intro:
        "Prime Customers that have access to bank credit and are not satisfied with the current service",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "lightseagreen",
      intro:
        "Prime Customers that have access to bank credit and are not satisfied with the current service",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "lightseagreen",
      intro:
        "Prime Customers that have access to bank credit and are not satisfied with the current service",
      tag: "Underserved",
    },
    {
      img: "https://i.pinimg.com/1200x/17/97/eb/1797ebba8ce9f3d59d02ba92a5d6c625.jpg",
      color: "orange",
      intro: "Customers from near-prime segments with no access to bank credit",
      tag: "Underbanked",
    },
  ];
  return (
    <>
      <div>
        <Section1 users={users} />
        <Section2 />
      </div>
      <div>
        <button  onMouseEnter={mouseEntered} onClick={btnClicked}>Click me</button>
        <input onChange={function(elem){
          likhraha(elem.target.value)
        }} type="text" placeholder="Enter your name " />
      </div>
    </>
  );
};

export default App;
