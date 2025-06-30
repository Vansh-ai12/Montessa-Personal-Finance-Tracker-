import {Link} from "react-router";
import "./Header.css"
import { useState ,useEffect} from "react";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./Blogin";
function Navbar(){
    const [iconShow,setIconShow] = useState(false)
   
    async function checkLogin(){
            try{const res = await fetch(import.meta.env.VITE_CHECK_URL,{
                credentials:"include"
            })
            const data = await res.json();
            console.log(data);
            if(res.ok && data.loggedIn){
                setIconShow(true);
            }
            else{
                setIconShow(false);
                localStorage.removeItem("iconShow");
            }
            }
            catch(err){
                console.error("Auth check failed", err);
                setIconShow(false);
            }


        }

    useEffect(() => {
    checkLogin();

    window.checkLogin = checkLogin;
   }, []);

    
    return(
        <>
        <div className="header" >
            <div>
                <Link  id="Logo" className="link" to="/"><h1>Montessa</h1></Link>
            </div>
            <div className = "icons">
                <ul>
                    {
                        iconShow?<AfterLogin/>:null
                    }
                    {
                        !iconShow?<BeforeLogin/>:null
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;