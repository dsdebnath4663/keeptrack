import { useState } from "react";
import Form from "./Form";
import ListItem from "./ListItem";

function List({ items, onUpdate, onRemove }) {
  const [editingItem, setEditingItem] = useState(null);

  const handleEdit = (item) => {
    setEditingItem(item);
  };
  const handleCancel = () => {
    setEditingItem(null);
  };
  return (
    <form>
      <h2>3.List</h2>
      {/* <pre>{JSON.stringify(items, null, " ")}</pre> */}
      {
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item === editingItem ? (
                <Form item={item} onSubmit={onUpdate} onCancel={handleCancel} />
              ) : (
                <ListItem item={item} onEdit={handleEdit} onRemove={onRemove} />
              )}
            </li>
            //
          ))}
        </ul>
      }
    </form>
  );
}
export default List;
