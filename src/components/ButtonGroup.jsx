import Button from "./Button";

export default function ButtonGroup() {
  const buttons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

  return (
    <section className="button-group">
      {buttons.map((text) => (
        <Button key={text} text={text} type="secondary" />
      ))}
    </section>
  );
}
