import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import {authActions}  from '../store/reducers/auth';

const Header = () => {
  const dispatch = useDispatch(); // init
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const logoutHandler = () => {
    dispatch(authActions.logout());
    console.log('isAuthenticated - logout', isAuthenticated)
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
