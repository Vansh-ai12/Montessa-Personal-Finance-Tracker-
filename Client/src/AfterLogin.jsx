import { Link, useNavigate } from "react-router";
function AfterLogin() {
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "Post",
        credentials: "include",
      });
      localStorage.removeItem("iconShow");

      if (typeof window.checkLogin === "function") {
        await window.checkLogin();
      }
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }
  return (
    <>
      <li style={{ marginLeft: "0px" }}>
        <Link className="link" to="/dashboard">
          <h1>DashBoard</h1>
        </Link>
      </li>
      <li>
        <Link className="link" to="/add">
          <h1>Add</h1>
        </Link>
      </li>
      <li>
        <button onClick={handleLogout}>
          <h2 style={{ fontStyle: "italic" }}>Logout</h2>
        </button>
      </li>
    </>
  );
}

export default AfterLogin;
