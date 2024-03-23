import Form from "./Form";
import React from "react";
import List from "./List";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";

function Container() {
  const [color, setColor] = useState("blue");
  const [items, setItems] = useState([]);

  function ID() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  const initialItems = [
    new Item(ID(), "First Item"),
    new Item(ID(), "Second Item"),
    new Item(ID(), "Third Item"),
  ];

  console.log(JSON.stringify(initialItems, null, " "));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor("green");
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setItems(initialItems);
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
    // console.log(JSON.stringify(items, null, " "));
  };

  const updateItem = (editedItem) => {
    let updateItems = items.map((item) => {
      return item.id === editedItem.id
        ? Object.assign({}, item, editedItem)
        : item;
    });
    setItems(updateItems);
  };

  const removeItem = (removeThisItem) => {
    let filteredItems = items.filter((item) => item.id !== removeThisItem.id);
    setItems(filteredItems);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: color, padding: "20px" }}>
        <h1>1.Container</h1>
      </div>
      <Form item="" onSubmit={addItem} buttonValue="Add" ID={ID} />

      <List items={items} onUpdate={updateItem} onRemove={removeItem} />
    </React.Fragment>
  );
}
export default Container;
