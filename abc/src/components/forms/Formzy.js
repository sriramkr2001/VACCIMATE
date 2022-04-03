import React from "react";
import styled from "styled-components";
import {useState,useEffect} from "react";
import Form_l from "./Form_l.js";
import Form_r from "./Form_r.js"
export default ({lead_type,id}) => {let [type,setType]=useState("leads")

// console.log("form rendered")
  return (
      <>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",margin:"2rem"}}>
    <p className="banner_p" style={{fontSize:"25px",fontWeight:"bolder",color:"#E91E63"}} onClick={(e)=>{setType("reqs")}}>Request Form</p>
    <p className="banner_p"style={{fontSize:"25px",fontWeight:"bolder",color:"#2196F3"}} onClick={(e)=>{setType("leads")}}   >Lead Form</p></div>
{type==="leads"&&<Form_l lead_type={lead_type} id={id}/>}
{type==="reqs"&&<Form_r lead_type={lead_type} id={id}/>}
</>
  );
};
