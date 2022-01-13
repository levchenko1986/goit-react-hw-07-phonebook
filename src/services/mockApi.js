import axios from "axios";
axios.defaults.baseURL = "https://61dffde90f3bdb0017934cdd.mockapi.io";
export async function fetchContacts() {
  const data = await axios.get(`/contacts`).then((result) => result.data);
  return data;
}
export async function addContact(data) {
  return axios.post("/contacts", data).then((res) => res.data);
}
export async function deleteContact(id) {
  return axios.delete(`/contacts/${id}`).then((res) => res.data);
}
