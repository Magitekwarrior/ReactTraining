import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";
import { useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMeetupsData, setAllMeetupsData] = useState([]);

  const firebaseUrl =
    "https://react-getting-started-3a5a7-default-rtdb.firebaseio.com/meetups.json";

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(firebaseUrl, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          // firebase data is an object, but we want an array
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        console.log("data: ", data);
        console.log("meetups: ", meetups);
        setAllMeetupsData(meetups);
      });
  }, []); // dependency array. Empty array means this will run once.

  if (isLoading) {
    return (
      <section>
        <p>LOADING ...</p>
      </section>
    );
  }

  if (!allMeetupsData) {
    return (
      <section>
        <h1>ALL MEETUPS</h1>
        <ul>No Meetup data available.</ul>
      </section>
    );
  }

  return (
    <section>
      <h1>ALL MEETUPS</h1>
        <ul>
          <MeetupList meetups={allMeetupsData} />
        </ul>
    </section>
  );
}

export default AllMeetupsPage;
