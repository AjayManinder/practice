import React from "react";
import "./Pages.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';



const Home=({arrays})=>{

    console.log(arrays)

useEffect(()=>{
    getPosts();
    },[])
    const [posts, setPosts] = useState([]);
    const getPosts = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        setPosts(res.data);    
        console.log(posts);
        }).catch((err)=>console.error(err));
    };
  

    return (
        <>
       
     
        <div className="container">
            <div className="homeHead">
<div className="homeHeadText">WELCOME!!!</div>
            </div>
            HOME PAGE
            </div>
            
            <div className="containerHome">
          

            <div className="arrayStyleContainer">      


            {
arrays.map((array) =>(
    
    <div key={array.id}  >
        <Link to={`/ContentImg/${array.title}`}>
    <button className="arrayStyle"   >
       <div style={{color:"blue"}}>
       <img className='gridImage' src={array.image} />
       <div  >Title: {array.title}</div>

       
       </div> 
        
    </button>
    </Link>
    </div>
     
    
))

}
            
            
        {
posts.map((post) =>(
    
    <div key={post.id}  >
        <Link to={`/Content/${post.id}`}>
    <div className="arrayStyle"   >
       <div style={{color:"blue"}}>
       
       <div  >Title: {post.title}</div>
      
       </div> 
        
    </div>
    </Link>
    </div>
     
    
))

}
</div>
<div className="containerHome2">
<div>

    </div>
<div className="containerHome2Sub"> Subcontentt 1</div>
<div className="containerHome2Sub"> Subcontentt 2</div>

</div>

</div>
            </>
    )
}


export default Home;