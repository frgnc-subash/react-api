import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const USER_URL = `${BASE_URL}/users`;
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  //------------------------- delete users

  const deleteUser = (id) => {
    try {
      axios.delete(`${USER_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  //------------------------- useEffect

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(USER_URL);
        setUsers(response.data);
      } catch (e) {
        console.error("Error fetching users:", e);
      }
    };
    getUsers();
  }, [USER_URL]);

  //-------------------------return function

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        style={{
          border: "none",
          padding: "14px",
          borderRadius: "4px",
          backgroundColor: "aqua",
        }}
      >
        Navigate to Post
      </button>

      {users.map((user) => {
        return (
          <div key={user.id} style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                backgroundColor: "lightblue",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              {user.name}
              <br />
              users latitude is{user.address.geo.lat} and longitude is{" "}
              {user.address.geo.lng}
            </p>
            <button
              style={{ backgroundColor: "red", cursor: "pointer" }}
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/users/${user.id}`)}
              style={{
                backgroundColor: "skyblue",
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid black",
                marginLeft: "10px",
              }}
            >
              View More
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
