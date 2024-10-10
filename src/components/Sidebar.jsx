import { useItemStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
// import useItemsContext from "./lib/hooks";

export default function Sidebar() {
  // const { hanleAddItem } = useItemsContext();
  const addItem = useItemStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
