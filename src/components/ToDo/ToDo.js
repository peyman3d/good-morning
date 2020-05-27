import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function ToDo() {
  const defaultItems = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  /**
   * Add new item to todo list
   *
   * @param {event} e
   * @param {string} title
   */
  const addItem = (e, title) => {
    e.preventDefault();

    const newItems = [...items];
    newItems.push({
      title,
      done: false,
      date: Date.now(),
    });
    setItems(newItems);
  };

  /**
   * Toggle status of todo list item
   * @param {number} i
   */
  const toggleItem = (i) => {
    const newItems = [...items];
    newItems[i].done = !newItems[i].done;
    setItems(newItems);
  };

  return (
    <div className="todo">
      <ToDoForm addItem={addItem} />
      <ToDoList items={items} toggleItem={toggleItem} />
    </div>
  );
}

export default ToDo;