import React, { useState, useEffect } from "react";
import MainPollSection from "./MainPollSection";

const PollShowPage = (props) => {
    const [poll, setPoll] = useState({});

    let pollId = props.match.params.id;

    useEffect(() => {
        fetchPoll();
    }, []);

    const fetchPoll = async () => {
        try {
        const response = await fetch(`/api/v1/polls/${pollId}`);
        if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`;
            throw new Error(errorMessage);
        }
        const pollData = await response.json();
        setPoll(pollData);
        } catch (err) {
        console.log(err);
        }
    };
    return (
        <div>
          <MainPollSection
            key={poll.id}
            title={poll.title}
            body={poll.body}
            option_1={poll.option_1}
            option_2={poll.option_2}
          />
        </div>
      );
};

export default PollShowPage;
  