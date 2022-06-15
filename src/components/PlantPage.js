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
  console.log("search string:", searchString);
  // const filteredPlantList = plants.filter((plant) =>
  //   plant.name.includes(searchString)
  // );
  // const filteredPlantsList = plants.filter(
  //   (plant) => plant.name === searchString
  // );
  const filteredPlantsList = plants;

  console.log("filtered list", filteredPlantsList.length);
  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search searchString={searchString} onNewSearch={handleNewSearch} />
      <PlantList plants={filteredPlantsList} />
    </main>
  );
}

export default PlantPage;
