import React, { useEffect, useState } from "react";
import axios from "axios";

const Task3ApiFetch = () => {
  const [users, setusers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      setusers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <h1 className="text-bold text-center text-2xl mb-4 ">
          Fetch API Challenge using Axios
        </h1>

        <table>
          <thead className="bg-gray-700">
            <tr>
              <th className="p-2">Username</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, indx) => (
              <tr
                className="bg-transparent border-b border-gray-400 hover:bg-gray-700 "
                key={user.id || indx}
              >
                <td className="p-2">{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task3ApiFetch;
