export default function Button({ text, buttonType, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn type ${
        buttonType === "secondary" ? "btn--secondary" : ""
      }`}
    >
      {text}
    </button>
  );
}
