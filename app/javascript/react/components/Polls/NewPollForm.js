import React, { useState, useEffect } from "react";
import ErrorList from "./ErrorList";
import { Redirect } from "react-router-dom";

const NewPollForm = () => {
  const [pollObject, setPollObject] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [newPoll, setNewPoll] = useState({
    title: "",
    body: "",
    option_1: "",
    option_2: ""
  });
  const clearForm = (event) => {
    event.preventDefault();
    setNewPoll({
    title: "",
    body: "",
    option_1: "",
    option_2: ""
    });
    setErrors({});
  };

  const addPoll = async () => {
    try {
      const response = await fetch("/api/v1/polls", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newPoll),
      });
      const pollData = await response.json();
      setPollObject(pollData);
      setShouldRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to={`/polls/${pollObject.poll.id}`} />;
  }

  const handleInputChange = (event) => {
    setNewPoll({
      ...newPoll,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title","body","option_1","option_2"];
    requiredFields.forEach((field) => {
      if (newPoll[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      addPoll();
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <ErrorList errors={errors} />
        <label>
          Title:
          <input
            type="text"
            id="title"
            onChange={handleInputChange}
            value={newPoll.title}
          />
        </label>

        <label>
          Body:
          <input
            type="text"
            id="body"
            onChange={handleInputChange}
            value={newPoll.body}
          />
        </label>

        <label>
          Option 1:
          <input
            type="text"
            id="option_1"
            onChange={handleInputChange}
            value={newPoll.option_1}
          />
        </label>

        <label>
          Option 2:
          <input
            type="text"
            id="option_2"
            onChange={handleInputChange}
            value={newPoll.option_2}
          />
        </label>

        <div>
          <button onClick={clearForm}>
            Clear
          </button>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default NewPollForm;
