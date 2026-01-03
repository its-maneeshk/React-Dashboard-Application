import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products; // products array
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
