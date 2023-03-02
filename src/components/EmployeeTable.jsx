import React from "react";

function EmployeeTable({ employees, handleDelete, handleEdit }) {
  return (
    <table className="table w-1/2 mx-auto">
      <thead>
        <tr className="bg-gray-50">
          <th className="border-b px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Matricule
          </th>
          <th className="border-b px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Full Name
          </th>
          <th className="border-b px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="border-b px-4 py-3">{employee.matricule}</td>
            <td className="border-b px-4 py-3">{employee.fullName}</td>
            <td className="border-b px-4 py-3">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(employee.id)}
              >
                Delete
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={() => handleEdit(employee)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
