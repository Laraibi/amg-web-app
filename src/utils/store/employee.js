import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL; // replace with your API URL
const API_URL ='http://localhost:3001'; // replace with your API URL

const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data;
};

const addEmployee = async (employee) => {
  const response = await axios.post(`${API_URL}/employees`, employee);
  return response.data;
};

const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_URL}/employees/${id}`, employee);
  return response.data;
};

const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/employees/${id}`);
  return response.data;
};

export { getEmployees, addEmployee, updateEmployee, deleteEmployee };
