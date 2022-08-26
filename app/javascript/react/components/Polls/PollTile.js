import React, { useState } from "react"
import { Link } from "react-router-dom"
const PollTile = (props) => {
  return (
      <div className="grid-x small-4">
        <Link to={`/polls/${props.id}`}> 
          <div className="poll-tiles">
            <img className="poll-photo" src="https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png" alt="Graph" />
            <h1 className="tile-title">{props.title}</h1>
          </div>
        </Link>
      </div>
  )
}

export default PollTile
