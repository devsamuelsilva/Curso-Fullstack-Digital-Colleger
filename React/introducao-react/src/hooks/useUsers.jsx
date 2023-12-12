import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useUsers() {
  const [users, setUsers] = useState([]);

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
    await fetchUsers()
    setRendered(true);

    setTimeout(() => {
        setRendered(false);
      }, 2000);

  }

  function clearFilds () {
    user.name = "";
    user.lastName = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(user.name.length > 2 && user.lastName.length >= 3) {
        createUser();
        clearFilds();
        toast.success('Usuário Criado com Sucesso !', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
    }   
  }

  async function fetchUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUsers(response.data);
  }

  async function deleteUser(id) {
    await axios.delete(
      `https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`
    );
    toast.success('Usuário Deletado com Sucesso !', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
    await fetchUsers();

  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { user, users, handleUser, handleSubmit, deleteUser, isRendered };
}
