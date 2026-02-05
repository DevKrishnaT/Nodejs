import { useState } from "react";
import slice from "./assets/slice.png"

import "./App.css";

function App() {
  const [id , setid] = useState("");
  const [name , setname] = useState("");
  const transferToExpress = async () => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        name
      })
    });

    const data = await response.json();

    if (response.status === 201) {
      alert("✅ Login Success");
      console.log(data);
    } else {
      alert("❌ Login Failed");
    }
  } catch (error) {
    console.error(error);
  }
};



   
  
  return (
    <>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="h-120 w-80 bg-amber-300 flex flex-col">
          <div className="area px-5 flex gap-4 flex-col h-full w-full">
            <h1 className="text-3xl font-bold underline text-center">
              login
            </h1>
            <div className="input h-10 w-full flex items-center  border rounded-2xl">
              <input type="text"  placeholder="id" className="w-full px-4 h-full outline-none" value={id} onChange={(e) => setid(e.target.value)}/>
            </div>
            <div className="input h-10 w-full flex items-center justify-center border rounded-2xl">
              <input type="text"  placeholder="name" className="w-full px-4 h-full outline-none" value={name} onChange={(e) => setname(e.target.value)}/>
            </div>
            <button className="h-10 w-full bg-blue-600 border text-white"    onClick={transferToExpress}>login</button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
