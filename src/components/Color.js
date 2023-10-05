export default function Color({ data, onSelectedPreview, onSelectedData }) {
  const isOpen = data.id === onSelectedData?.id;
  return (
    <div className={`color ${isOpen ? "onSelectedColor" : ""}`}>
      <h2>{data.name}</h2>
      <button onClick={() => onSelectedPreview(data)}>
        {isOpen ? "Close" : "Preview"}
      </button>
    </div>
  );
}
