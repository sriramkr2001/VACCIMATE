import { Link } from "react-router-dom";
import "./sidebar.scss";
import {useState,useEffect} from 'react';
import axios from "axios";
export default function Sidebar() {
    const [cat,setCat]=useState([]);
    // const [c,setC]=useState(0)
    useEffect(()=>{
console.log(window.location)
const getCat=async()=>{
  try{
    const res = await axios.get("/categories")
setCat(res.data)
  }
  catch(err){
    console.log(err)
    setCat([{name:"K>SRIRAM"}])
  }

}
getCat()
    },[])
  return (
    <div className="sidebar">
     <header>
  <h2>Cool Articles</h2>
</header>
<br />

<div class="bandy">
    <div class="item-1">
    <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}></div>
      <article>
        <h1 className="postDesc" >International Artist Feature: Malaysia</h1>
        <span>Mary Winkler</span>
      </article>
    </a>
  </div>

  <div class="item-2">
    <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)"}} ></div>
      <article>
        <h1 className="postDesc" >How to Conduct Remote Usability Testing</h1>
        <span>Harry Brignull</span>
      </article>
    </a>
  </div>
  <div class="item-3">
    <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)"}} ></div>
      <article>
        <h1 className="postDesc" >Created by You, July Edition</h1>
       
        <span>Melody Nieves</span>
      </article>
    </a>
  </div>
  <div class="item-4">
    <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)"}} ></div>
      <article>
        <h1 className="postDesc">How to Code a Scrolling “Alien Lander” Website</h1>
        
        <span>Kezz Bracey</span>
      </article>
    </a>
  </div>
</div>
<br />

<header>
  <h2>More such Articles</h2>
</header>
<br />

<div class="bandy">
    <div class="item-1">
    <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}></div>
      <article>
        <h1 className="postDesc">International Artist Feature: Malaysia</h1>
        <span>Mary Winkler</span>
      </article>
    </a>
  </div>

  <div class="item-2">
    <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)"}} ></div>
      <article>
        <h1 className="postDesc">How to Conduct Remote Usability Testing</h1>
        <span>Harry Brignull</span>
      </article>
    </a>
  </div>
  <div class="item-3">
    <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)"}} ></div>
      <article>
        <h1>Created by You, July Edition</h1>
       
        <span>Melody Nieves</span>
      </article>
    </a>
  </div>
  <div class="item-4">
    <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" class="cardy">
      <div class="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)"}} ></div>
      <article>
        <h1 className="postDesc">How to Code a Scrolling “Alien Lander” Website</h1>
     
        <span>Kezz Bracey</span>
      </article>
    </a>
  </div>
</div>
<br />
<br />
<br />


    </div>
  );
}
