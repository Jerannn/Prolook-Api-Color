export default function Color({ color, onSelectedPreview, onSelectedData }) {
  const isOpen = color.id === onSelectedData?.id;
  return (
    <div className={`color ${isOpen ? "onSelectedColor" : ""}`}>
      <h2>{color.name}</h2>
      <button onClick={() => onSelectedPreview(color)}>
        {/* {id: 1, name: 'Black', color_code: 'B', hex_code: '0e0e0e'} */}
        {isOpen ? "Close" : "Preview"}
      </button>
    </div>
  );
}
