
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Pages.css";
export const ContentImg = ({arrays})=>{
    
    const params =useParams();
    const {title}=useParams();
    console.log(title);
    console.log(params);

    

    return(
        <div>
           <div className="apiHead"></div>           
            <div className="contentContainer">  
          {  arrays.filter((array)=>array.title === title)
          .map((array) => (
                <div className="full-card" key={ array.id }>
                  <div>Name: {array.title}</div>
                
                  <img className='gridImage1' src={array.image} />

                  <div className="contentDescription">
Description: {array.description}
</div>

                </div>
              ))}



</div>
        </div>
     
  )
}


