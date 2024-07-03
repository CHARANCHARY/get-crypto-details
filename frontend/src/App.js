import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import List from "./components/List";

function App() {
  return (
    <div>
      <Navbar />
      <Stats />
      <List />
      <div className="h-20 text-zinc-700 mt-10">Sai Charan</div>
      <div className="fixed bottom-0 left-0 right-0 w-full  flex justify-center bg-[#191D28]  mx-auto ">
      </div>
    </div>
  );
}

export default App;
