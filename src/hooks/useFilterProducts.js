import { useSelector } from "react-redux";
import { selectSearchFilters } from "@/features/search/searchSlice.js";

const useFilterProducts = (products) => {
  const filters = useSelector(selectSearchFilters);
  const { sort } = filters;
  return products
    .filter((product) => {
      const matchesName = filters.name ? product.name.toLowerCase().includes(filters.name.toLowerCase().trim()) : true;
      const matchesMinPrice = filters.min ? product.price >= filters.min : true;
      const matchesMaxPrice = filters.max ? product.price <= filters.max : true;
      const matchesCategory = filters.category ? product.category === filters.category : true;

      return matchesName && matchesMinPrice && matchesMaxPrice && matchesCategory;
    }).sort((a, b) => {
      if (sort === "nameAsc") return a.name.localeCompare(b.name);
      if (sort === "nameDesc") return b.name.localeCompare(a.name);
      if (sort === "priceAsc") return a.price - b.price;
      if (sort === "priceDesc") return b.price - a.price;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
};

export default useFilterProducts;