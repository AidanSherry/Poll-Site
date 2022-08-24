import React from "react";

const MainPollSection = (props) => {
  return (
    <div className="PollShowPage">
        <h1 className="Title">{props.title}</h1>
        <p className="Body">{props.body}</p>
        <div className="Options">
            <p className="Option_1">{props.option_1}</p> 
            <p className="Option_2">{props.option_2}</p>
        </div>
    </div>
  );
};
export default MainPollSection;
