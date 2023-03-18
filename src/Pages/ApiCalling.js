import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pages.css"

const ApiCalling=()=>{

    const headings = ["ID", "Title", "Body" ]


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

//async and Await
// async function fetchData() {
//     let response = await axios(
//       `api`
//     );
//     let user = await response.data;
//     setproduct(user);
//     console.log(product);
//   }

    return (
        <div className="containerApi">
<div className="apiHead"></div>
<table>
<tr>
 
            {
                headings.map((heading)=>(
                    <th>   {heading}  </th> 
                ))
            }
          
                
        </tr>
        {
            posts.map((post)=>(
<tr>
            <th className="tableId">
                {post.id}
            </th>
            <th className="tableTitle">
                {post.title}
            </th>
            <th className="tableBody">
                {post.body}
            </th>
            </tr>
            ))
        }

</table>


        {
            posts.map((post)=>(

            <li key={post.id}>
                Title : <>{post.title}</>
            </li>
            ))
        }
        
        </div>
    )
}

export default ApiCalling;