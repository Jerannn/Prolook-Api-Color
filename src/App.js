import { useEffect, useState } from "react";

const url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://api.prolook.com/api/colors/prolook");

export default function App() {
  const [colorData, setColorData] = useState(null);

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setColorData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(colorData);
  return (
    <main>
      <ColorList />
    </main>
  );
}

function ColorList() {
  return (
    <div>
      <h1>dfdfa</h1>
    </div>
  );
}
