import Button from "./Button";
import { buttons } from "./lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttons.map((text) => (
        <Button key={text} text={text} type="secondary" />
      ))}
    </section>
  );
}
