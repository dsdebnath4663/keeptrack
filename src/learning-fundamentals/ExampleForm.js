import React from "react";

function ExampleForm() {
  const fileInput = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fileInput.current);
    console.log(fileInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" ref={inputRef} /> */}
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ExampleForm;
