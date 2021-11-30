import React from "react"
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
let textInput = React.createRef();





const Main1 = ()=>{
    
    
   const Handelsearch = e => {
  
    
        const value =textInput.current.value;
        const fist="https://api.openweathermap.org/data/2.5/weather?q="
        const last = "&appid=5e078d11b6a6baf4c61819e5e3017aac"

        const res =  axios.get(fist+value+last).then(res =>{
             console.log(res.data)
            
            document.getElementById("A").value=res.data.name;
            document.getElementById("b").value=res.data.main.temp;
            document.getElementById("c").value=res.data.sys.country;
            document.getElementById("d").value=res.data.main.temp_min;
            document.getElementById("e").value=res.data.main.temp_max;

     })

    
     }
    return (
        <div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        <div className="ae">
          <form > 
              <hr></hr>
          <input ref={textInput}  type='text' id="aaa" name="di" ></input>
          <br>
            </br>
<hr></hr>
          <a className="btn btn-danger a123" onClick={Handelsearch} >
                                <i className ="fas fa-login"></i>&nbsp;Check
                            </a>
            </form>


         <h5> Country Name</h5>
          <input id="A"disabled ></input><br></br>
          <h5>Temperature</h5>
          <input id="b" disabled></input><br></br>
          <h5>Country Code</h5>
          <input id="c" disabled></input><br></br>
          <h5>Min Temperature</h5>
          <input id="d" disabled></input><br></br>
          <h5>Max Temperature</h5>
          <input id="e" disabled></input><br></br>
         
      </div>
      <h3>Input City for get the result  . Ex:- London</h3>
      <h3>I have not added attractive css.</h3>
      </div>
      
    );
  }
  

export default Main1;