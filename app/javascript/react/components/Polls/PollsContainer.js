import React, { useState, useEffect, Fragment } from "react";
import PollTile from "./PollTile";

const PollsContainer = (props) => {
  const [polls, setPolls] = useState([]);

  const getPolls = async () => {
    try {
      const response = await fetch("/api/v1/polls");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const pollData = await response.json();
      setPolls(pollData.polls);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPolls();
  }, []);


  const pollArray = polls.map((poll) => {
    return (
      <PollTile
        key={poll.id}
        title={poll.title}
        body={poll.body}
        option_1={poll.option_1}
        option_2={poll.option_2}
        id={poll.id}
      />
    );
  });
  
  return (
    <div className="poll-index-container">
      <h1 className="poll-index-text"> Click on a poll to vote! </h1>
      <div className="grid-x"> {pollArray}</div>
    </div>
  );
};

export default PollsContainer;
