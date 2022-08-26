import React, { useState, useEffect } from "react";
import CommentTile from "./CommentTile";
import NewCommentForm from "./NewCommentForm";

const CommentContainer = ({ comments, addComment }) => {
  const listOfComments = comments.map((comment) => {
    return (
      <CommentTile
        key={comment.id}
        comment={comment.comment}
        pollId={comment.comment_id}
        commentId={comment.id}
      />
    );
  });

  return (
    <div>
      <div className="comments">
        <h2 className="comment-title">Comments</h2>
        <div>{listOfComments}</div>
      </div>
      <NewCommentForm addComment={addComment} />
    </div>
  );
};

export default CommentContainer;
