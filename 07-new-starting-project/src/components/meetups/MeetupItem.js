import React from "react";
import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import FavouritesContext from "store/favourites-context";

function MeetupItem(props) {
  const faveCtx = useContext(FavouritesContext);
  const itemIsFavourite = faveCtx.itemIsFavourite(props.id);

  function toggleFavouritStatusHandler() {
    if (itemIsFavourite) {
      faveCtx.removeFavourite(props.id);
    } else {
      faveCtx.AddFavourite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'To Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
