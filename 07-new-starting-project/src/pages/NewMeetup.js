import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    const firebaseUrl = "https://react-getting-started-3a5a7-default-rtdb.firebaseio.com/meetups.json";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetupData),
    };
    fetch(firebaseUrl, requestOptions
    ).then(() => {
      history.replace('/');
    }).catch((err) => {
      console.log('error:', err);
    });

      // .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
