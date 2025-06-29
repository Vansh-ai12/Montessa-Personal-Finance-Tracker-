import { useState } from "react";
import "./Login.css";
import Navbar from "./Navbar";
function SignUp() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function storeDetails(event) {
    event.preventDefault();
    const url = "http://localhost:3000/api/users";
    let response = await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, email, password }),
    });
    response = await response.json();
    if (response) {
      alert("new user added");
      localStorage.setItem("iconShow","true");
      window.location.href = "/";
      
    }
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          id="signupform"
          className="Log-sign"
        >
          <div id="login">
            <h1>Sign Up</h1>
          </div>
          <input
            className="losi"
            type="text"
            placeholder="Enter Username"
            id="user"
            onChange={(event) => setUser(event.target.value)}
          ></input>
          <input
            className="losi"
            type="email"
            placeholder="Enter Email"
            id="user"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            className="losi"
            type="password"
            placeholder="Enter Password"
            id="pass"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <div id="btnC">
            <button id="btn" onClick={storeDetails}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;
