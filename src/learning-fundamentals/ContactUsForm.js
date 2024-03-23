import React, { useState } from "react";

function ContactUsForm() {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = React.useState("");
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  var object = {
    department,
    message,
    agreedToTerms,
  };

  function handleSubmit(event) {
    event.preventDefault();

    console.log("object", JSON.stringify(object, null, ""));
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <br />
      <br />
      <textarea
        cols="30"
        rows="5"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <input
        type="checkbox"
        name="agreedToTerms"
        checked={agreedToTerms}
        onChange={(e) => setAgreedToTerms(e.target.value)}
      />
      I agree to the terms and conditions.
      <br />
      <button>Send</button>
    </form>
  );
}
export default ContactUsForm;
