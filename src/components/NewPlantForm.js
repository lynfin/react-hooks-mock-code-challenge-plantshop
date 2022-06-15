import React, { useState } from "react";
const noPlant = {
  name: "",
  image: "",
  price: 0,
};

function NewPlantForm({ handleNewPlant }) {
  const [formData, setFormData] = useState(noPlant);
  const { name, image, price } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name} changed to ${value}`);
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
