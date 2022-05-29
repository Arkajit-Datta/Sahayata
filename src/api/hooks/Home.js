import React from "react";
import { API } from "../ApiList";
import img from "../../pages/assets/unsplash_Z2YggU_u8mg.png";
function FetchEventUpdates() {
  const axios = require("axios").default;
  const [homeEventsAndUpdates, sethomeEventsAndUpdates] = React.useState("");
  const [homeStoryOfTheDay, sethomeStoryOfTheDay] = React.useState("");

  const callApi = () => {
    axios
      .get(API.HOME_EVENTS_AND_UPDATES)
      .then(function (response) {
        sethomeEventsAndUpdates(response.data.Events);
        console.log("HOME PAGE 1",response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get(API.HOME_STORY_OF_THE_DAY)
      .then(function (response) {
        sethomeStoryOfTheDay(response.data.Story);
        console.log("HOME PAGE 2",response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  React.useEffect(() => {
    callApi();
  }, []);

  return { homeEventsAndUpdates, homeStoryOfTheDay };
}

export default FetchEventUpdates;
