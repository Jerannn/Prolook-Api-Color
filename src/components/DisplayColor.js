export default function DisplayColor({ onSelectedData }) {
  let isVisible = false;
  const color = "#000";
  if (
    onSelectedData.name === "White" ||
    onSelectedData.name === "Yellow" ||
    onSelectedData.name === "Cream" ||
    onSelectedData.name === "Safety Green" ||
    onSelectedData.name === "Flag Yellow" ||
    onSelectedData.name === "Optic Yellow"
  ) {
    isVisible = true;
  }

  return (
    <div
      className="right-side"
      style={{
        background: `#${onSelectedData.hex_code}`,
        color: isVisible ? color : "#FFEFD5",
      }}
    >
      {/* color =  {id: 1, name: 'Black', color_code: 'B', hex_code: '0e0e0e'} */}
      <span>Name: {onSelectedData.name}</span>
      <span>Hex: #{onSelectedData.hex_code}</span>
      <span>Color Code: {onSelectedData.color_code}</span>
    </div>
  );
}
