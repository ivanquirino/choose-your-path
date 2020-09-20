import axios from "axios";

export const getPeopleById = (id) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.data);
};

