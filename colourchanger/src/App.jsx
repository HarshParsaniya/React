import { useState } from "react"

function App() {

  const [color,setColor] = useState("black")
  const [textColors, setTextColors] = useState({
    red: "white",
    green: "white",
    blue: "white",
    lightblue: "white",
  });

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setTextColors({
      [newColor]: "black",
    });
  };

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => handleColorChange("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red", color:textColors['red']}}
          >Red</button>
          <button
          onClick={() => handleColorChange("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green", color:textColors['green']}}
          >Green</button>
          <button
          onClick={() => handleColorChange("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue", color:textColors['blue']}}
          >Blue</button>
          <button
          onClick={() => handleColorChange("lightblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lightblue", color:textColors['lightblue']}}
          >Light Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App;