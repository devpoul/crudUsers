import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";

const baseURL = "https://users-crud1.herokuapp.com";

function App() {
  const [users, setUsers] = useState();

  // Esto para pasar información desde UserCard hasta FormUser
  const [updateInfo, setUpdateInfo] = useState();

  // Esto es para cerrar la forma al momento de editar revisar el className formContainer
  const [formIsClose, setFormIsClose] = useState(true);

  // Para hacer el .get de todos los users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // Para crear un nuevo usuario
  const createNewUser = (data) => {
    const URL = `${baseURL}/users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // para eliminar un usuario específico
  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Para actualizar un usuario en específico
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className="App">
      <div className="AppContainerTitle">
        <h1 className="AppTitle">CRUD USERS</h1>
        <button onClick={handleOpenForm} className="AppButton">Create a new user</button>
      </div>
      <div className={`formContainer ${formIsClose && "disableForm"}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      </div>

      <div className="usersContainer">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormIsClose={setFormIsClose}
          />
        ))}
      </div>
      <footer className="mainFooter">
      <h2>💀Developed🥁by🎸DevPoul🤘🏽</h2>
    </footer>
    </div>
  );
}

export default App;
