import axios from "axios";

export const getItems = async () => {
  const burguers = await axios.get("http://localhost:3333/item");
  return { burguers };
};