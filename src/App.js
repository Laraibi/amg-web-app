import './App.css';
import NewEmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee,updateEmployee} from './utils/store/employee'; // import the functions from your employee.js file

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees()
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const handleAddEmployee = async (employee) => {
  //   try {
  //     const response = await addEmployee(employee);
  //     setEmployees([...employees, response.data]);
  //     alert("New employee added successfully!");
  //   } catch (error) {
  //     alert(`Error adding employee: ${error.message}`);
  //   }
  // };

  return (
    <div className="App">
      <NewEmployeeForm  />
      <EmployeeTable employees={employees} handleDelete={deleteEmployee} handleEdit={updateEmployee}/>
    </div>
  );
}

export default App;
