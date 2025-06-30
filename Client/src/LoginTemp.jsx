import { useState } from "react";
import "./Login.css"
function Login() {
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

  async function onLogin(event){
    event.preventDefault();
    const url = import.meta.env.VITE_LOGIN_URL;
    let response =await fetch(url,{
      method:"Post",
      headers:{
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({  email, password }),

    });
    response = await response.json();
    if (response) {
      alert("Logged in succesfuly");
      localStorage.setItem("iconShow","true");
      window.location.href = "/";
      
    }
    else{
      alert("Login Failed")
    }

  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form style={{display:"flex", flexDirection:"column" } } className="Log-sign">
            <div id="login">
                <h1>Login</h1>
            </div>
            <input className="losi" type="text" placeholder="Enter Email" id="user" onChange={(event)=>setEmail(event.target.value)}></input>
            <input className="losi" type="password" placeholder="Enter Password" id="pass" onChange = {(event)=>setPassword(event.target.value)}></input>
            <div id="btnC">
                <button id="btn" onClick={onLogin}>Submit</button>
            </div>
        </form>
      </div>
    </>
  );
}
export default Login;
