import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
const Contact=()=>{



const [name, setName] = useState("ajay");
    const [add, setAdd] = useState(0);

    const [myName, setMyName] = useState("ajay")

const [change, setChange]= useState("");



    function inc(){
        setAdd(add+1);
    }
    function dec(){
        setAdd(add-1);
    }

    function changeOfName(e){
setName("sunny");
    }






    return(
        <>
       
     
        <div className="container">
            <div className="homeHead">
<div className="homeHeadText">Contact US</div>
            </div>
        
</div>
        
        <div className="containerAbout">
           CONTACT PAGE



           <div>
<div data-testid="add">{add}</div>
<button onClick={inc}>Increment</button>
<button onClick={dec}>Decrement</button>
           </div>
<div>
<div>My name is {name}</div>
<button onClick={changeOfName}>Change Name</button>
</div>

<div>
    
    <input
    type="text"
    value={change}
    onChange={(e)=> setChange(e.target.value)}
    
    />

<h4> Input text : {change}</h4>

</div>


<div>

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

</div>
</div>
           
            </>
    )
}

export default Contact;