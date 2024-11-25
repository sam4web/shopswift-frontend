import { CATEGORIES } from "@/constants";

const getCategoryTitle = (categoryValue) => {
  return CATEGORIES.find(category => category.value === categoryValue)["title"];
};

export default getCategoryTitle;