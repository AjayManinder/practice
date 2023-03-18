import React, { useState, useEffect } from "react";
import "./Pages.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Content=()=>{

  const [creature, setCreature] = useState([])
 
const{id} = useParams();
const params = useParams();

console.log(params);

useEffect(()=>{
  getPosts();
  },[])
  
  const getPosts = ()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
        setCreature(res.data);    
      console.log(creature);
      }).catch((err)=>console.error(err));
  };
    return (
        <>
       
     
        <div className="container">
            <div className="homeHead">
<div className="homeHeadText">Content</div>
            </div>
        
</div>

        
        <div className="containerAbout">
            Content Page

          
<div>Title: {creature.title}</div>
<div> Body : {creature.body}</div>

</div>
           
            </>
    )
}


export default Content;