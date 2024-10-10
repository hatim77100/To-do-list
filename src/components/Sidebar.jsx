import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import useItemsContext from "./lib/hooks";

export default function Sidebar() {
  const { hanleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={hanleAddItem} />
      <ButtonGroup />
    </div>
  );
}
