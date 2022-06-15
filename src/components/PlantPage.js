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

  // useEffect(() => {

  // },[searchString])

  const handleNewPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const handleNewSearch = (newSearch) => {
    setSearchString(newSearch);
  };

  const filteredPlantsList = plants.filter((plant) =>
    searchString ? plant.name.includes(searchString) : true
  );

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search searchString={searchString} onNewSearch={handleNewSearch} />
      <PlantList plants={filteredPlantsList} />
    </main>
  );
}

export default PlantPage;
