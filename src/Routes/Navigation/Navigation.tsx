import { Fragment } from "react/jsx-runtime";
import { Outlet, Link } from "react-router-dom";
import logo from '/Users/marcoferrel/Desktop/Bloom/src/assets/crown.svg'
import './Navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/Shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={"/SignIn"}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
