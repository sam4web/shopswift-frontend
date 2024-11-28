import { CATEGORIES } from "@/constants/index.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchFilters, selectSearchFilters, setSearchFilters } from "@/features/search/searchSlice.js";

const SearchForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectSearchFilters);
  const [formData, setFormData] = useState(filters || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    dispatch(clearSearchFilters());
    setFormData(null);
  };

  const handleSubmit = (e) => {
    dispatch(setSearchFilters(formData));
    e.preventDefault();
  };

  useEffect(() => {
    return () => dispatch(clearSearchFilters());
  }, [dispatch]);

  return (
    <form
      className="px-3 py-5 lg:px-5 lg:py-7 bg-light dark:bg-dark-primary shadow-md rounded-xl space-y-3 sm:space-y-7"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="md:space-y-7 grid grid-cols-1 sm:grid-cols-3 gap-3 md:block justify-between items-center">
        <div>
          <label htmlFor="name" className="input-label"> Search Product </label>
          <input
            className="input-field-sm"
            type="text"
            name="name"
            id="name"
            value={formData?.name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="category" className="input-label"> Select Category </label>
          <select
            name="category"
            id="category"
            className="input-field-sm"
            onChange={handleChange}
            defaultValue={formData?.category}
          >
            <option>All</option>
            {CATEGORIES.map((category) => (
              <option value={category.value} key={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="input-label"> Sort By </label>
          <select name="sort" id="sort" className="input-field-sm" onChange={handleChange}>
            <option value="priceAsc">Price (Lowest)</option>
            <option value="priceDesc">Price (Highest)</option>
            <option value="nameAsc">Name (A - Z)</option>
            <option value="nameDesc">Name (Z - A)</option>
          </select>
        </div>
      </div>

      <div className="md:space-y-7 flex-col sm:flex-row flex justify-between sm:items-center gap-3 md:block">
        <div className="flex-1">
          <label htmlFor="min" className="input-label"> Price Range </label>
          <div className="flex gap-3 items-center">
            <input
              className="input-field-sm"
              type="number"
              name="min"
              id="min"
              placeholder="Min"
              min={0}
              onChange={handleChange}
              value={formData?.min || ""} />
            <input
              className="input-field-sm"
              type="number"
              name="max"
              id="max"
              placeholder="Max"
              min={0}
              onChange={handleChange}
              value={formData?.max || ""}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2.5">
        <button type="submit" className="btn bg-emerald-500 border-emerald-500 p-1.5 w-full">
          Submit
        </button>
        <button type="reset" className="btn bg-rose-500 border-rose-500 p-1.5 w-full">
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchForm;