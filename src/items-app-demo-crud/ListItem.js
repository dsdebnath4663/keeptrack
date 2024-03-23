import { useState } from "react";

function ListItem({ item, onEdit, onRemove, ID }) {
  const [inputValue, setInputValue] = useState(item || "");

  return (
    <p>
      {item.name}
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onRemove(item)}>Delete</button>
    </p>
  );
}
export default ListItem;
