import Add from "./Add";
import DashBoard from "./DashBoard";
import Home from "./Home";
import Login from "./LoginTemp"
import Navbar from "./Navbar";
import { Route,Routes } from "react-router";
import SignUp from "./SignUp";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/signup" element={<SignUp/>}/>
        
      </Routes>
    </>
  );
}

export default App;
