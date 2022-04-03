import React from "react";

export default ({
  subheading = "Interested in Treact ?",
  heading = "Join the closed beta now.",
  primaryLinkText = "Get Started",
  primaryLinkUrl = "http://timerse.com",
  secondaryLinkText = "Contact Us",
  secondaryLinkUrl = "http://google.com",
  pushDownFooter = true
}) => {
  return (
    <div  className="banner-container" >
<div style={{fontSize:"30px",marginTop:"2rem",marginBottom:"2rem",fontWeight:"bolder",color:"#7986CB"}}>
    Oxygen Resources !
    <br/>
    <hr/>
</div>
<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",margin:"2rem"}}>
    <p className="banner_p" style={{fontSize:"25px",fontWeight:"bolder",color:"#E91E63"}}>Requests</p>
    <p className="banner_p"style={{fontSize:"25px",fontWeight:"bolder",color:"#2196F3"}}>Leads</p>
    <p className="banner_p"style={{fontSize:"25px",fontWeight:"bolder",color:"#FF9800"}}>Make Request</p>



</div>
    </div>
  );
};
