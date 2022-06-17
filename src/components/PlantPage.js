import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  const handleSearchUpdate = (newSearch) => {
    setSearchString(newSearch);
  };

  const handleNewPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };
  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search searchString={searchString} onSearchUpdate={handleSearchUpdate} />
      <PlantList
        plants={plants.filter((plant) =>
          plant.name.toLowerCase().includes(searchString.toLowerCase())
        )}
      />
    </main>
  );
}

export default PlantPage;
