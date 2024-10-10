import Button from "./Button";
import useItemsContext from "./lib/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    { text: "Mark all as incomplete", onClick: handleMarkAllAsInComplete },
    { text: "Reset to initial", onClick: handleResetToInitial },
    { text: "Remove all items", onClick: handleRemoveAllItems },
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
