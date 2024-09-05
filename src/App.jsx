import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const[color,setColor]=useState("cyan")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 my-2">
        <div className="flex flex-wrap gap-3 bg-white p-2 rounded-full">
            <button onClick={() => setColor("red")}
             className="bg-red-600 px-2 rounded-md text-white">Red</button>
            <button onClick={() => setColor("green")}
             className="bg-green-600 px-2 rounded-md text-white">Green</button>
            <button onClick={() => setColor("blue")}
             className="bg-blue-600 px-2 rounded-md text-white">Blue</button>
            <button onClick={() => setColor("orange")}
             className="bg-orange-600 px-2 rounded-md text-white">Orange</button>
            <button onClick={() => setColor("gray")}
             className="bg-gray-600 px-2 rounded-md text-white">Gray</button>
            <button onClick={() => setColor("yellow")}
             className="bg-yellow-600 px-2 rounded-md text-white">Yellow</button>
        </div>
      </div>
      {/* <Card username="M.Qasim Farooq" 
      imageUrl="https://images.pexels.com/photos/316398/pexels-photo-316398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      btnText="Find me"/>      */}
    </div>
  );
}

export default App;
