import { useEffect, useState } from "react";
import DisplayColor from "./components/DisplayColor";
import ColorList from "./components/ColorList";

const url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://api.prolook.com/api/colors/prolook");

export default function App() {
  const [colorData, setColorData] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  // this function will fetch the data from this api https://api.prolook.com/api/colors/prolook
  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setColorData(data.colors);
    } catch (error) {
      console.log(error);
    }
  }

  // This function will handle the click event and show the filter data on the screen.
  function handlePreview(color) {
    // color =  {id: 1, name: 'Black', color_code: 'B', hex_code: '0e0e0e'}
    setColorSelected((cur) => (cur?.id === color.id ? null : color));
  }

  useEffect(() => {
    getData();
    document.title = "Prolook Api Color";
  }, []);

  return (
    <main>
      {colorData && (
        <ColorList
          onColorData={colorData}
          onSelectedData={colorSelected}
          onSelectedPreview={handlePreview}
        />
      )}
      {colorSelected && <DisplayColor onSelectedData={colorSelected} />}
    </main>
  );
}
