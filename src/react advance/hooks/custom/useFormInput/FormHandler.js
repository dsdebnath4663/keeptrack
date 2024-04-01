import React, { useState } from "react";

// Custom hook for handling form input
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

const FormHandler = () => {
  // Using the custom hook to manage two form inputs
  const firstName = useFormInput("");
  const lastName = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName.value} ${lastName.value}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" {...firstName} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" {...lastName} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandler;
