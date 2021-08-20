import React from "react";

function Form(props) {

  return (
    <form>
      <input onChange={props.handleFirstNameChange} type="text" value={props.firstName} />
      <input onChange={props.handleLastNameChange} type="text" value={props.lastName} />
      <input onChange={props.handleNewsletterChange} type="checkbox" value={props.newsletter}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
