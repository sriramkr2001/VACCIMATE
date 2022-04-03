import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { List, Avatar, Rowzy, Col } from 'antd';
import { css } from "styled-components/macro"; //eslint-disable-line
import Comments from "../Sections/Comments.js"
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {useState,useEffect} from 'react';
import axios from "axios";
import {useHistory,useLocation,Link,useParams} from"react-router-dom"
import LikeDislikes from "components/Sections/LikeDislikes.js";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default () => {
  const location = useLocation()
  let history = useHistory()
  const [post,setPost] = useState({})
  const {post_ID}=useParams()
  console.log(post_ID,"buroo")
  const [CommentLists, setCommentLists] = useState([])
  // const { curUser } = location.state
  const postVariable = {
    post_ID: post_ID
}

useEffect(() => {


const fetchPost = async ()=>{
  try{ 
// setisLoading("true")
  console.log(location)
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
    const response = await axios.get(`/api${location.pathname}`,config) 
    let obj=response.data.post[0];
    obj.currUser=response.data.currUser
    console.log(obj)
  setPost(obj)
}
  catch(err)
  {
   //  setPosts({error:"true"})
   history.replace("/*")
   console.log("yayy",err)
  }

  // setisLoading("false")
  // console.log("wow man !!")
  //  console.log(response.data)


  try
{
  const response= await axios.post('/api/comment/getComments', postVariable)
  if (response.data.success) {
    console.log('response.data.comments',response.data.comments)
    console.log(response.data.comments,"oo")
    setCommentLists(response.data.comments)
 }}
 catch(err) {
    
    window.alert('Failed to get video Info')
 }

}
fetchPost()

  




}, [])

const updateComment = (newComment) => {
  setCommentLists(CommentLists.concat(newComment))
}

  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      authorImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      title: "Tips on how to travel safely in foreign countries",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Charlotte Delos",
      authorProfile: "Travel Advocate",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Vlogger",
      url: "https://reddit.com"
    }
  ];

  const recentPosts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Getting the most out of your vacation",
      authorName: "Aaron Patterson",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Choosing the perfect Safaris in Africa",
      authorName: "Sam Phipphen",
      url: "https://reddit.com"
    },
    // {
    //   postImageSrc:
    //     "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    //   title: "Hiking during the monsoon in Asia",
    //   authorName: "Tony Hawk",
    //   url: "https://timerse.com"
    // },
    // {
    //   postImageSrc:
    //     "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    //   title: "Must carry items while travelling to Thailand",
    //   authorName: "Himali Turn",
    //   url: "https://timerse.com"
    // },
    // {
    //   postImageSrc:
    //     "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80",
    //   title: "An extremely funny trip to the Swiss Alps",
    //   authorName: "Naomi Watts",
    //   url: "https://timerse.com"
    // },
  ]

  return (
    <Container className="main_cont_postd" style={{padding:"1rem",paddingTop:"3rem",margin:"auto"}}>
      <div style={{margin:"1rem",marginTop:"5rem"}}>
        <Row>
          <PopularPostsContainer>
            <Heading className="post_Mheading" style={{width:"100%",textAlign:"center"}}>Post Details</Heading>
Upvote/Downvote !
<LikeDislikes author={post.postUserID} postId={post._id} userId={post.currUser} />,
            <PostsContainer>
  <div className="post_Details" style={{width:"90%",minHeight:"100vh",height:"maxContent",backgroundColor:"#F5F5F5",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"1rem"}}>
  <Image
      transition={{ duration: 0.3 }}
      variants={postBackgroundSizeAnimation}
      imageSrc={popularPosts[0].postImageSrc}
    />
    <br/>
    {/* <div className="item-1" style={{borderRadius:"3%",borderTop:"10px solid #2196F3"}}> */}
  
      <article style={{border:"2px solid pink"}}>
      <h3 style={{fontWeight:"bolder",fontSize:"20px"}}>{post.lead_type} {post.type1}</h3>
 {post.lead_status&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >status</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.lead_status}</span></span>}
 {post.urgency_status&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >status</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.urgency_status}</span></span>}
        <h3 style={{fontWeight:"bolder",color:"#757575",fontStyle:"italic"}} className="postTitle">{post.title}</h3>
  
        <p style={{textAlign:"justify",marginTop:"0.5rem",fontWeight:"400"}} className="one_liner" ><b style={{color:"#F06292"}}>Location:</b> <b>{post.area_landmark}</b>  </p>
        <p style={{textAlign:"justify",marginTop:"0.5rem",fontWeight:"400"}} className="one_liner" ><b style={{color:"#F06292"}}>Address:</b> <b>{post.address}</b>  </p>
        <pre style={{textAlign:"justify",marginTop:"0.5rem",fontWeight:"400"}} className="one_liner" ><b style={{color:"#F06292"}}>Instructions:</b> <b>{post.instructions}</b>  </pre>

        <pre style={{textAlign:"justify",marginTop:"0.5rem",fontWeight:"400"}} className="one_liner" ><b style={{color:"#F06292"}}>Message:</b> <b>{post.message}</b>  </pre>
        <p  style={{marginTop:"0.2rem",width:"100%",textAlign:"left",fontWeight:"400"}} > <b style={{color:"#FF9800"}}>Name :</b>{post.name} <br/> </p>
      
         <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>posted on :</b>{new Date(post.createdDate).toDateString()}</p>
         <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>Availability Hours :</b>{post.availability}</p>

         <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>Email :</b>{post.email}</p>

         <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>Phone Number :</b>{post.phone_no}</p>


         <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>Category :</b>{post.category}</p>
         <p style={{marginTop:"0.2rem",marginBottom:"0.2rem",width:"100%",textAlign:"left",fontWeight:"500"}}><b style={{color:"#2196F3"}}>Profession/Org :</b>{post.profession_org}</p>

        {(post.blood_plasma||post.food_grocery||post.emergency_drugs||post.hospital_beds)&&<span style={{color:"red",marginTop:"0.5rem"}} ><b style={{color:""}} >category</b>: &nbsp;&nbsp; <span className="tag tag-blue" style={{padding:"5px",border:"1px solid,transparent",borderRadius:"45em",fontWeight:"bold"}}>{post.blood_plasma||post.food_grocery||post.emergency_drugs||post.hospital_beds}</span></span>}
        {post.category==="leads"&& <p style={{marginTop:"0.4rem",marginBottom:"0.2rem",width:"100%",textAlign:"center",fontWeight:"500"}}><b style={{color:"#E64A19"}}>Verification Status :</b>{post.verified==="true"?"Verified ✅":"yet to verify 🤔"}</p>}
<div style={{margin:"auto",fontSize:"25px",fontWeight:"bolder"}}>comments</div>
<br/>

<Comments currUser={post.currUser} CommentLists={CommentLists}  postId={post._id} refreshFunction={updateComment}/>

      </article>
      </div>
    {/* </div> */}




            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            {/* <div style={{width:"100%",height:"400px",backgroundColor:"yellow",border:"10px solid black",borderRadius:"10px"}}></div> */}
            <Heading>Recent Requests</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
            <Heading>Latest Leads</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row> 
        
        <br/>
        
      </div>
    </Container>
  );
};







// {popularPosts.map((post, index) => (
//   <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
//     <Image
//       transition={{ duration: 0.3 }}
//       variants={postBackgroundSizeAnimation}
//       imageSrc={post.postImageSrc}
//     />
//     <Title>{post.title}</Title>
//     <Description>{post.description}</Description>
//     <AuthorInfo>
//       <AuthorImage src={post.authorImageSrc} />
//       <AuthorNameAndProfession>
//         <AuthorName>{post.authorName}</AuthorName>
//         <AuthorProfile>{post.authorProfile}</AuthorProfile>
//       </AuthorNameAndProfession>
//     </AuthorInfo>
//   </Post>
// ))}