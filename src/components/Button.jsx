export default function Button({ text, type }) {
  return (
    <button
      className={`btn type ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}
