import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [students, setStudents] = useState([]);

  // GET data
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/users/${id}`)
      .then((response) => {
        setStudents(students.filter((student) => student.id !== id));
        alert("User deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        alert("Error deleting user.");
      });
  };

  // Handle update
  const handleUpdate = (id) => {
    const updatedName = prompt("Enter the new name for the user:");
    if (updatedName) {
      axios
        .patch(`http://localhost:4000/users/${id}`, { nama: updatedName })
        .then((response) => {
          const updatedStudents = students.map((student) => (student.id === id ? { ...student, nama: updatedName } : student));
          setStudents(updatedStudents);
          alert("User updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          alert("Error updating user.");
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">Daftar Siswa</h1>
      <div className="w-full max-w-4xl overflow-auto max-h-[500px]">
        <table className="table-auto w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-left">Kelas</th>
              <th className="py-3 px-6 text-center"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {students.map((student) => (
              <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.id}</td>
                <td className="py-3 px-6 text-left">{student.nama}</td>
                <td className="py-3 px-6 text-left">{student.gender}</td>
                <td className="py-3 px-6 text-left">{student.kelas}</td>
                <td className="py-3 px-6 text-center">
                  <button onClick={() => handleUpdate(student.id)} className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">
                    Update
                  </button>
                  <button onClick={() => handleDelete(student.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
