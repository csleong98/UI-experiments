import React from "react";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Test element to verify Tailwind */}
      <div className="mb-8 bg-green-500 text-white p-4 rounded-lg shadow-lg text-center">
        If you see this with green background, Tailwind is working!
      </div>
      
      {/* Dropdown container */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
