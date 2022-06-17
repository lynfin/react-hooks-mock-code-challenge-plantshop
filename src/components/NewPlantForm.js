import React, { useState } from "react";

const blankForm = {
  name: "",
  image: "",
  price: 0,
};
function NewPlantForm({ onNewPlant }) {
  const [formData, setFormData] = useState(blankForm);
  const { name, image, price } = formData;

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      name === "price" ? parseFloat(e.target.value) : e.target.value;

    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newPlant) => onNewPlant(newPlant));
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
