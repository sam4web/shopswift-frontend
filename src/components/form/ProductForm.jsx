import { useState } from "react";
import { CATEGORIES } from "@/constants/index.js";

const ProductForm = ({ create, handleSubmit, initialData }) => {
  const [productData, setProductData] = useState(initialData || null);
  const [imageFile, setImageFile] = useState(initialData?.image || null);
  const [errors, setErrors] = useState();

  const validateForm = () => {
    const newErrors = {};
    if (!productData?.name) newErrors.name = "Name is required.";
    if (!productData?.price) newErrors.price = "Price is required.";
    if (!productData?.category) newErrors.category = "Select a category.";
    if (create && !imageFile) newErrors.image = "Image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && canSubmit;
  };

  const handleChange = (e) => {
    setErrors(null);
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setErrors(null);
    if (e.target.files) setImageFile(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const formData = new FormData();
    for (const [key, value] of Object.entries(productData)) {
      formData.append(key, value);
    }
    formData.append("image", imageFile);
    handleSubmit(formData);
    setProductData(null);
  };

  const canSubmit = [productData?.name, productData?.price, productData?.category].every(Boolean);

  return (
    <form encType="multipart/form-data" className="space-y-6" onSubmit={submitForm}>
      <div className="field-wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={productData?.name || ""}
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
          value={productData?.price || ""}
        />
        <p className="err-msg">{errors?.price}</p>
      </div>

      <div className="field-wrapper">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          value={productData?.description || ""}
        />
      </div>

      <div className="field-wrapper">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={handleChange} defaultValue={productData?.category}>
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
          <span className="text-dark-primary dark:text-light">
            <span className="pl-2">
              Currently: <a href="/">{initialData?.image.name}</a>
            </span>
            <p>Change:</p>
          </span>
        )}
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
          onChange={handleFileChange}
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