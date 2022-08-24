import React, { useState, Fragment } from "react";
import ErrorList from "../Polls/ErrorList";

const NewCommentForm = ({ addComment }) => {
  const [errors, setErrors] = useState({});
  const [addNewComment, setAddNewComment] = useState({
    comment: "",
  });

  const handleInputChange = (e) => {
    setAddNewComment({
      ...addNewComment,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["comment"];
    requiredFields.forEach((field) => {
      if (addNewComment[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setAddNewComment({
      comment: "",
    });
    setErrors({});
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validForSubmission()) {
      addComment({ comment: addNewComment });
      setAddNewComment({
        comment: "",
      });
    }
  };

  return (
    <div className="new-comment-form">
      <form onSubmit={onSubmitHandler}>
        <h2>Submit A Comment</h2>
        <ErrorList errors={errors} />

        <label>
          Comment
          <input
            type="text"
            id="comment"
            onChange={handleInputChange}
            value={addNewComment.comment}
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

export default NewCommentForm;
