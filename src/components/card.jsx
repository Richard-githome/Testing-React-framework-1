import React from "react";
import Avartar from "./avartar";
import ContactInfo from "./contactinfo";

export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avartar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <ContactInfo contactinfo={props.tel} />
        <ContactInfo contactinfo={props.mail} />
      </div>
    </div>
  );
}
