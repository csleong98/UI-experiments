import React from "react";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Dropdown container */}
        <Card title="Dropdown" description="Description" component={<Dropdown />} />
        <Card title="Button" description="Description" component={<Button variant="secondary" size="sm" children="Click me" />} />
      </div>
    </div>
  );
}

export default App;
