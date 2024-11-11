import { useState } from "react";
import { CATEGORIES } from "@/constants/index.js";

const ProductForm = ({ create, handleSubmit }) => {
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState();

  const validateForm = () => {
    const newErrors = {};
    if (!formData?.name) newErrors.name = "Name is required.";
    if (!formData?.price) newErrors.price = "Price is required.";
    if (!formData?.category) newErrors.category = "Select a category.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && canSubmit;
  };

  const handleChange = (e) => {
    setErrors(null);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    handleSubmit(formData);
  };

  const canSubmit = [formData?.name, formData?.price, formData?.category].every(Boolean);

  return (
    <form encType="multipart/form-data" className="space-y-6" onSubmit={submitForm}>
      <div className="field-wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData?.name || ""}
        />
        <p className="err-msg">{errors?.name}</p>
      </div>

      <div className="field-wrapper">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={formData?.price || ""}
        />
        <p className="err-msg">{errors?.price}</p>
      </div>

      <div className="field-wrapper">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          value={formData?.description || ""}
        />
      </div>

      <div className="field-wrapper">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleChange} defaultValue={""}>
          <option value="" disabled>---------</option>
          {CATEGORIES.map((category) => (
            <option value={category.value} key={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <p className="err-msg">{errors?.category}</p>
      </div>

      <div className="field-wrapper">
        <label htmlFor="image">Image</label>
        {!create && (
          <>
            <span className="pl-2">
              Currently: <a href="/">currentFileName</a>
            </span>
            <p>Change:</p>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
        />
        <p className="err-msg">{errors?.image}</p>
      </div>

      <button type="submit" className="btn-secondary">
        {create ? "Create" : "Update"} Product
      </button>
    </form>
  );
};

export default ProductForm;