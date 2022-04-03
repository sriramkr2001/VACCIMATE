import "./header.css";

import { Link } from "react-router-dom";
import "../sidebar/sidebar.scss"
import {useState,useEffect} from 'react';
import axios from "axios";
import { useLocation,useHistory } from "react-router-dom";
let arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
export default function Sidebar({type,lead_type,id}) {
  const location = useLocation()
  let history = useHistory()
  const [posts,setPosts] = useState([])
  const [isLoading,setisLoading] = useState("false")
    useEffect(()=>{
// console.log(type,"mounted")






const fetchPosts = async ()=>{
  try{ 
setisLoading("true")
    const response = await axios.get(`/api/explore/${lead_type}/?category=${type}`)
  setPosts(response.data)
  console.log(response.data)
  setisLoading("false")
  // console.log("wow man !!")
  //  console.log(response.data)
  }
 
 catch(err)
 {
  //  setPosts({error:"true"})
  history.replace("/*")
  console.log("yayy",err)
 }


}

fetchPosts()

    },[history])
  
  let type1=type.substring(0, type.length - 1);
  const path=location.pathname
  let without_underscore=lead_type.split("_").join(" ")
    // console.log(type,"rendered")
  return (
    <div className="sidebar" style={{backgroundColor:"#F5F5F5"}}>

     <header>
  <h2 style={{color:"#2196F3",fontSize:"25px"}}>{without_underscore} {type}</h2>


  <br/>
  <br/>
</header>
<br />

<div className="bandy">
   {isLoading==="true"&&<div  className="loading" style={{fontWeight:"bolder",margin:"auto",fontSize:"35px",width:"100%",textAlign:"center",marginLeft:"1%",}}>Loading Pal...</div>}
 { isLoading==="false"&&posts.length!=0&&posts.map((post)=>Display_card({...post,lead_type,type1,path,id}))}
 {isLoading==="false"&&posts.length===0&&<div className="no_posts" style={{width:"100%",textAlign:"center",marginLeft:"1%",fontSize:"25px",fontWeight:"bolder"}}>No posts under this category currently pal !</div>}
 
 










</div> 
<br />
</div>



  );
}



// <div className="item-1" style={{borderRadius:"3%",borderTop:"10px solid #2196F3"}}>
// <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="cardy">

//   <article style={{border:"2px solid pink"}}>
//   <h3 style={{fontWeight:"bolder",fontSize:"20px"}}>Vaccine Request</h3>
// <span><b>status</b>: &nbsp;&nbsp; Urgent</span>
//     <h3 style={{fontWeight:"bolder"}}>I want so and so doeses of</h3>
  
//     <p style={{textAlign:"justify",marginTop:"0.5rem"}}><b>Location:</b> Guindy Chennai  </p>

//     <p  style={{marginTop:"0.2rem",width:"100%",textAlign:"left"}} > <b>Name :</b>Sriram Krishnamurthy  <br/> </p>

//      <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left"}}><b>posted on :</b>30/07/2001</p>

//     <b>Complete Details</b>
//   </article>

// </a>
// </div>


const Display_card = (post)=>
{
//  console.log(post)
  return(

//     <div className="item-1" style={{borderRadius:"3%",borderTop:"10px solid #2196F3"}}>

//       <article style={{border:"2px solid pink"}}>
//       <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="" style={{margin:"auto",width:"35%",maxHeight:"35vh",marginTop:'0.2rem',borderRadius:"50%"}} />
//       <h3 style={{fontWeight:"bolder",fontSize:"20px"}}>{post.lead_type} {post.type1}</h3>
//  {post.lead_status&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >status</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.lead_status}</span></span>}
//  {post.urgency_status&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >status</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.urgency_status}</span></span>}
//         <h3 style={{fontWeight:"bolder",color:"#757575",fontStyle:"italic"}} className="postTitle">{post.title}</h3>
       
//         <p style={{textAlign:"justify",marginTop:"0.5rem",fontWeight:"400"}} className="one_liner" ><b style={{color:"#F06292"}}>Location:</b> <b>{post.area_landmark}</b>  </p>

//         <p  style={{marginTop:"0.2rem",width:"100%",textAlign:"left",fontWeight:"400"}} > <b style={{color:"#FF9800"}}>Name :</b>{post.name} <br/> </p>
      
//          <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>posted on :</b>{new Date(post.createdDate).toDateString()}</p>
         
    
//         {(post.blood_plasma||post.food_grocery||post.emergency_drugs||post.hospital_beds)&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >category</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.blood_plasma||post.food_grocery||post.emergency_drugs||post.hospital_beds}</span></span>}
//         {post.category==="leads"&& <p style={{marginTop:"0.4rem",marginBottom:"0.2rem",width:"100%",textAlign:"center",fontWeight:"500"}}><b style={{color:"#E64A19"}}>Verification Status :</b>{post.verified==="true"?"Verified ✅":"yet to verify 🤔"}</p>}
//       <Link to={{    
//         pathname:`${post.path}/`+`${post._id}`,
//         state: {
//          curUser:post.id
//         }
    
//     }}
       
      
      
      
      
      
//       ><b style={{color:"#3949AB",cursor:"pointer",fontSize:"20px"}}>Complete Details ➡</b></Link>  
//       </article>
//       </div>
<>
  <div class="cardy">
    <div class="card-header">
      <img src="https://picsum.photos/600/800?random=1" alt="rover" />
    </div>
    <div class="card-body">
     
    
    <h3 style={{fontWeight:"bolder",fontSize:"20px"}}>{post.lead_type} {post.type1}</h3>
  {post.lead_status&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >status</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.lead_status}</span></span>}
  {post.urgency_status&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >status</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.urgency_status}</span></span>}

      <h3 style={{fontWeight:"bolder",color:"#757575",margin:"auto",marginTop:"0.5rem",fontSize:"15px"}} className="postTitle">{post.title}</h3>
       
       <p style={{textAlign:"justify",marginTop:"0.25rem",fontWeight:"400"}} className="one_liner" ><b style={{color:"#F06292"}}>Location:</b> <b>{post.area_landmark}</b>  </p>
       <p  style={{marginTop:"0.2rem",width:"100%",textAlign:"left",fontWeight:"400"}} > <b style={{color:"#FF9800"}}>Name :</b>{post.name} <br/> </p>
        <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>posted on :</b>{new Date(post.createdDate).toDateString()}</p>
         
    
    {(post.blood_plasma||post.food_grocery||post.emergency_drugs||post.hospital_beds)&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >category</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.blood_plasma||post.food_grocery||post.emergency_drugs||post.hospital_beds}</span></span>}
       {post.category==="leads"&& <p style={{marginTop:"0.4rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#E64A19"}}>Verification Status :</b>{post.verified==="true"?"Verified ✅":"Pending 🤔"}</p>}
    <Link to={{    
        pathname:`${post.path}/`+`${post._id}`,
        state: {
         curUser:post.id
        }
    
    }}
      ><b style={{color:"#3949AB",cursor:"pointer",fontSize:"20px"}}>Complete Details ➡</b></Link>  
    
      {/* <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div> */}
    </div>
  </div> 
 

 </>

     

    
  )

}