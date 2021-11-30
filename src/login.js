
import  React from 'react'

export default function Admin  (){



    
    function myFunction() {
        
        
        const adminuser = document.getElementById('user1').value;
        const adminpass =document.getElementById('pass1').value;

            if(adminuser =="admin" && adminpass =="admin"){
                
                window.location.href="/page" ;
 
            }else{
                alert("login Fail")
                
            }
      }


    return (
       
        
       
            
            <div className="ae1">
           
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <form  >
                <br></br>
                <p>Login Using username=admin password=admin</p>
            <h2>weather System</h2>

            <input type="text" placeholder="Username" id="user1" ></input><br></br>
            <input  type="password" placeholder="Password"id="pass1"></input><br></br>
            <a className="btn btn-danger a123"  onClick={myFunction}>
                                <i className ="fas fa-login"></i>&nbsp;Login
                            </a>
           
            
            </form>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>
             <h3>Backend is not connected to this.this is simple login frontend validation form </h3>
            </div>
            

               

       
    )

}