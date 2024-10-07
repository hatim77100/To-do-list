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
      {buttons.map((text, index) => (
        <Button key={index} text={text} type="secondary" />
      ))}
    </section>
  );
}
