import { useState } from "react";

function Form({ item, buttonValue, onSubmit, onCancel }) {
  console.log(item);
  const [inputValue, setInputValue] = useState(item.name || "");

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("==========");
    const submittedItem = {
      id: item ? item.id : ID(),
      name: inputValue,
    };
    console.log("submittedItem : ", JSON.stringify(submittedItem, null, " "));

    onSubmit(submittedItem);
    setInputValue("");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <form>
      <h2>2.Form</h2>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleFormSubmit}>{buttonValue || "Save"}</button>
      {/* {onCancel && (
        <a href="#" onClick={handleCancel}>
          cancel
        </a>
      )} */}
    </form>
  );
}
export default Form;
