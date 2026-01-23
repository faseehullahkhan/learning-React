import React from "react";
import { BadgeCheck, Heart, Plus, UserRound, X } from "lucide-react";

const Card = (props) => {
  return (
    <>
      <div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${props.img})`,
          }}
        >
          <div className="top">
            <X />
          </div>
          <div className="center">
            <h2>{props.name} </h2>
            <BadgeCheck />
          </div>
          <div className="bottom">
            <p>{props.desc}</p>
          </div>
          <div className="buttons">
            <div>
              <UserRound />
              <h3>{props.followers}</h3>
              <Heart />
              <h3>{props.likes}</h3>
            </div>
            <button>Follow <Plus /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
// props are use to pass the data in the same structure
