import { NavLink } from "react-router-dom"
import Button from "./ui/Button";

const Navbar = () => {
  const storageKey = "loggedInUser"
  const userDataStr = localStorage.getItem(storageKey);
  const userData = userDataStr ? JSON.parse(userDataStr) : null;

  const onLogout = () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
  }

  return (
    <>
      <nav className=" max-w-lg mx-auto px-3 py-5 mb-20 rounded-md flex justify-between items-center">
        <div className="">
          <ul className="">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-5 items-center">
            {userData ? (
              <>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <Button className="" onClick={onLogout}>Logout</Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>




    </>
  )
}

export default Navbar