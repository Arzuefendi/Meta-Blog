import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={props.img} width="100%" height={300} />
          <div className="card-body">
            <p className="card-text m-2">{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
