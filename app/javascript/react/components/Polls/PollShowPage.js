import React, { useState, useEffect } from "react";
import MainPollSection from "./MainPollSection";
import CommentContainer from "../Comments/CommentsContainer";
const PollShowPage = (props) => {
    const [poll, setPoll] = useState({});
    const [comments, setComments] = useState([]);

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

    const addComment = async (formInput) => {
        try {
          const response = await fetch(`/api/v1/polls/${pollId}/comments`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formInput),
          });
          const commentData = await response.json();
          {
            response.status === 401
              ? alert(commentData.error)
              : setComments(comments.concat(commentData.review));
          }
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

          <CommentContainer comments={comments} addComment={addComment} />
        </div>
      );
};

export default PollShowPage;
  