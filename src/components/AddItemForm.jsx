import { useRef, useState } from "react";
import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";
// import useItemsContext from "./lib/hooks";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  // const { handleAddItem } = useItemsContext();
  const addItem = useItemStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      inputRef.current.focus();
      return;
    }

    addItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button className="btn" text="Add to list" />
    </form>
  );
}
