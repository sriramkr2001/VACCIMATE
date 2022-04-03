import { useState, useEffect } from "react";
import axios from "axios";
import Form_l from "../components/forms/Form_l.js"
import Formzy from "../components/forms/Formzy.js"
// import "./PrivateScreen.css";
import Intro from "../components/cta/banner.js"
import Header from "./header/Header.jsx"
import { useHistory ,useLocation,useParams} from "react-router-dom";
import DashedBorderSixFeatures from "components/features/DashedBorderSixFeatures";
const View1=()=>{
  return <Header type={"leads"}/>
}

const View2=()=>{
  return <Header type={"reqs"}/>
}
const Essentials_explore = () => {
  const {lead_type}=useParams()
 
  console.log("The lead type is",lead_type)
  const [error, setError] = useState("");
  const [id,setID]=useState("");
  // const [privateData, setPrivateData] = useState("");
const [state,setState]=useState({leads:"true",reqs:"false",form:"false"})
const history=useHistory();
console.log(history.location.search)
const location=useLocation();
console.log(location.pathname,"!!")
  useEffect(() => {
    if(!localStorage.getItem("authToken"))history.replace("/login")
    
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        console.log(data.data)
        setID(data.data)
        const setter=history.location.search? `/${history.location.search}`:""
        // history.push(`/explore/${lead_type}`)
        // setPrivateData("cookies and localstorage are used to persist sessions in the client browser. You can use them to re-authenticate a returning user. I am not familiar with the sessionID key, but I must assume it is set by the passport middleware into the express req object based on your queryString ?token= . You may be storing this as a global variable in your application and will be lost if the user closes the browser. use cookies or localstorage if you want to store this token value for later. Or you could just make the user login again and save the trouble altogether!");
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        setTimeout(() => {
          history.push("/login")
        }, 2000);
      }
    };

    fetchPrivateDate();
  }, []);
  let x = state.leads?<Header/>:<Header/>
  x=state.form?<Form_l/>:<Header/>
//   console.log(leads,reqs,form)
  return error ? (
    <span style={{marginTop:"10rem",marginBottom:"10rem",height:"100px",fontWeight:"bolder",fontSize:"25px"}} className="error-message">{error}</span>
  ) : (
    <div className="top_priv"style={{marginTop:"96px",paddingTop:"0.2rem",minHeight:"100vh",backgroundColor:"#FAFAFA",textAlign:"center",  overflow: "hidden"}}>

 
    <div  className="banner-container" >
<div style={{fontSize:"30px",marginTop:"2rem",marginBottom:"2rem",fontWeight:"bolder",color:"#7986CB"}}>
    {lead_type.split("_").join(" ")} resources !
    <br/>
    <hr/>
    {/* {id} */}
</div>
<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",margin:"2rem"}}>
    <p className="banner_p" style={{fontSize:"25px",fontWeight:"bolder",color:"#E91E63"}} onClick={(e)=>{
    
        setState({
            leads:"false",
            reqs:"true",
            form:"false"
        })
    }}>Requests</p>
    <p className="banner_p"style={{fontSize:"25px",fontWeight:"bolder",color:"#2196F3"}} 
    onClick={(e)=>{
        setState({
            leads:"true",
            reqs:"false",
            form:"false"
        })
    }}   >Leads</p>
    <p className="banner_p"style={{fontSize:"25px",fontWeight:"bolder",color:"#FF9800"}} 
    
    onClick={(e)=>{
        setState({
            leads:"false",
            reqs:"false",
            form:"true"
        })
    }}

    >Make Request</p>



</div>
    </div>
  
    <div style={{ display: state.leads==="true" ? null : 'none' }}>
      <Header type={"leads"} lead_type={lead_type} id={id}/>
</div>
  {/* {state.form==="true"&&<Formzy/>} */}
  <div style={{ display: state.reqs==="true" ? null : 'none' }}>
      <Header type={"requests"} lead_type={lead_type} id={id}/>
</div>  
<div style={{ display: state.form==="true" ? null : 'none' }}>
   <Formzy lead_type={lead_type} id={id}/>
</div>  
    
    </div>
  );
};

export default Essentials_explore;