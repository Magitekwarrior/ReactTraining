import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css"

import FavouritesContext from "store/favourites-context";

function MainNavigation() {
  const faveCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>REACT MEETUPS</div>
      <nav>
        <ul>
        <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favourites'>Favourites
            <span className={classes.badge}>
              {faveCtx.totalFavourites}
            </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
