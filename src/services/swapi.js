import axios from "axios";

export const getPeopleById = (id) => {
  return axios
    .get(`http://swapi.dev/api/people/${id}`)
    .then((res) => res.data);
};

