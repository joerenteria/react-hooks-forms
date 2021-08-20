import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplatData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter,setNewsletter] = useState(false)

  const newsletterSubscription = newsletter?"Yes":"No";



  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  function handleNewsletterChange(e){
    setNewsletter(e.target.checked)
  }

  return (<>
    <Form
    firstName={firstName}
    lastName={lastName}
    newsletter={newsletter}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}
    handleNewsletterChange={handleNewsletterChange}
    />
    <DisplayData
    firstName={firstName}
    lastName={lastName}
    newsletter={newsletterSubscription}
    />
    </>
  );
}

export default ParentComponent
