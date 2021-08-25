import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          {/* <Route path='/' exact={true}> */}
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
