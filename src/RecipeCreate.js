import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //insert recipe into recipes array as object
    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    }
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe])
    setFormData({...initialFormState});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={formData.name}>
              </input>
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}>
              </input>
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}>
              </input>
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}>
              </textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}>
              </textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
