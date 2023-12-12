import axios from "axios";
import {useState } from "react";

export function useUsersForm() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const [isRendered, setRendered] = useState(false);
  
  function handleUser(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function createUser() {
    const response = await axios.post(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
      user
    );
    console.log(response);

    setRendered(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser();
  }

  return {user, handleUser, handleSubmit, isRendered};
}
