import axios from "axios";

const getPeopleById = (id) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.data);
};

export default getPeopleById;
