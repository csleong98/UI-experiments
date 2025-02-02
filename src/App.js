import React from "react";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";
import Button from "./components/Button";
import TextInput from "./components/textInput";
import { MagnifyingGlass, EnvelopeSimple } from "@phosphor-icons/react";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Dropdown container */}
        <Card title="Dropdown" description="Description" component={<Dropdown />} />

        {/* Button container */}
        <Card title="Button" description="Description" 
          component={
            <Button 
              variant="secondary" 
              size="md" 
              children="Click me" 
            />} 
        />

        {/* Text Input examples */}
        <Card 
          title="Text Input" 
          description="Default with search icon" 
          component={
            <TextInput 
              onChange={(e) => console.log(e.target.value)} 
              placeholder="Search..." 
              variant="default"
              size="md"
              leadingIcon={MagnifyingGlass}
              trailingIcon={EnvelopeSimple}
              helpertext="This is a helper text"
              label="Label"
            />
          } 
        />
      </div>
    </div>
  );
}

export default App;
