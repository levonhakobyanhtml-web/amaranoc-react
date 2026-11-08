import React from "react";
import Icon from "./components/header/icon";
import Text from "./components/header/headerTexts";
import Search from "./components/header/SearchBox";
import Category from "./components/NavBar/Categories";
import "./App.css"
export function App() {
  return (
    <div>
      <Icon/>
      <Text/>
      <Search/>
      <Category/>
    </div>
  );
}

export default App;