import React from 'react';
import { useContext } from "react";

import FavouritesContext from "store/favourites-context";
import MeetupList from 'components/meetups/MeetupList';

function FavouritesPage() {
  const faveCtx = useContext(FavouritesContext);
  let content;

  if (faveCtx.totalFavourites === 0){
    content = <p>There are no favourites yet. Go to All Meetups to add some.</p>
  } else {
    content = <MeetupList meetups={faveCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites:</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;