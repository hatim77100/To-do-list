import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";
// import useItemsContext from "./lib/hooks";

export default function ButtonGroup() {
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsInComplete,
  //   handleResetToInitial,
  //   handleRemoveAllItems,
  // } = useItemsContext();

  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemStore(
    (state) => state.markAllAsInComplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete /*handleMarkAllAsComplete,*/,
    },
    { text: "Mark all as incomplete", onClick: markAllAsInComplete },
    { text: "Reset to initial", onClick: resetToInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          text={text}
          buttonType="secondary"
          onClick={onClick}
        />
      ))}
    </section>
  );
}
