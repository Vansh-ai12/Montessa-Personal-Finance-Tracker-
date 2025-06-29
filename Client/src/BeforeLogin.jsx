import {Link} from "react-router"
function BeforeLogin() {
  return (
    <>
      <li>
        <Link className="link" to="/login">
          <h1>Login</h1>
        </Link>
      </li>
      <li>
        <Link className="link" to="/signup">
          <h1>Sign Up</h1>
        </Link>
      </li>
    </>
  );
}
export default BeforeLogin;