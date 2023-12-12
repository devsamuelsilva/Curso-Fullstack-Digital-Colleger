import { ToastContainer } from "react-toastify";
import { Form } from "../../components/pages/users/Form";
import { UsersTable } from "../../components/pages/users/Table";
import { useUsers } from "../../hooks/useUsers";

export default function UserPage() {
  const { user, users, handleUser, handleSubmit, deleteUser, isRendered } = useUsers();


  return (
    <>
      <h1>Página do Usuário</h1>
      <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user}  isRendered={isRendered}/>
      <UsersTable deleteUser={deleteUser} users={users} />
    </>
  );
}
