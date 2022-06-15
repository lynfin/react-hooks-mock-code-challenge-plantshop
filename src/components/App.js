import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
function App() {
  // ┌ ─ ├ └ │
  // App
  //  ├ Header
  //  └ PlantPage [plants, searchString]
  //     ├ NewPlantForm
  //     ├ Search
  //     └ PlantList
  //         └ PlantCard [isInStock]
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
