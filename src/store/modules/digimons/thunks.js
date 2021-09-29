import axios from "axios";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => dispatch(addDigimon(response.data[0].name)))
    .catch((err) => console.log(err));
};

export default addDigimonsThunk;
