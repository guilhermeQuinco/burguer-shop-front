import axios from "axios";

export const getBurguers = async () => {
  const burguers = await axios.get("http://localhost:3333/burguer");
  return { burguers };
};
