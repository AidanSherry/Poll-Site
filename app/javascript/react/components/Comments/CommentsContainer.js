import React, { useState, useEffect } from "react";
import CommentTile from "./CommentTile";
import NewCommentForm from "./NewCommentForm";

const CommentContainer = ({ comments, addComment }) => {
  const listOfComments = comments.map((comment) => {
    return (
      <CommentTile
        key={comment.id}
        pollId={comment.comment_id}
        commentId={comment.id}
      />
    );
  });

  return (
    <div>
      <h2>Comments</h2>
      <div>{listOfComments}</div>
      <NewCommentForm addComment={addComment} />
    </div>
  );
};

export default CommentContainer;
