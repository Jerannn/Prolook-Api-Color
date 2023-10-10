import Color from "./Color";

export default function ColorList({
  onColorData,
  onSelectedPreview,
  onSelectedData,
}) {
  return (
    <div className="left-side">
      <h1>Colors: </h1>
      <div className="colors">
        {onColorData.map((color) => {
          return (
            <Color
              color={color}
              key={color.name}
              onSelectedPreview={onSelectedPreview}
              onSelectedData={onSelectedData}
            />
          );
        })}
      </div>
    </div>
  );
}
