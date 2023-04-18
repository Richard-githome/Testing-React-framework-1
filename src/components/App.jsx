import React from "react";
import contacts from "../contacts";
import Card from "./card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      tel={contact.phone}
      mail={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
