import { format } from "date-fns";

const formatDate = (date) => {
  return format(new Date(date), "MMM dd, yyyy");
};

export default formatDate;