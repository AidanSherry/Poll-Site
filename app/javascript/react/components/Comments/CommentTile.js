import React from "react";

const CommentTile = (props) => {
    return (
        <div className="comment-tile">
            {props.comment}
        </div>
      );
}

export default CommentTile