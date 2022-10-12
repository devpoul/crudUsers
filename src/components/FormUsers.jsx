import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUsers.css";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setFormIsClose,
}) => {
  const { handleSubmit, reset, register } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      // update
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      // create
      createNewUser(data);
    }
    reset(defaultValues);
    setFormIsClose(true)
  };

  const handleCloseForm = () => {
    setFormIsClose(true);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <i onClick={handleCloseForm} className="formX fa-solid fa-x"></i>
      <h2 className="formTitle">{updateInfo ? `Edit User` : `New User`}</h2>
      <div className="formDiv">
        <label className="formLabel" htmlFor="email">
          Email{" "}
        </label>
        <input
          className="formInput"
          placeholder="enter your email"
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="password">
          Password{" "}
        </label>
        <input
          className="formInput"
          placeholder="enter your password"
          type="text"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="first_name">
          First name{" "}
        </label>
        <input
          className="formInput"
          placeholder="enter your first name"
          type="text"
          id="first_name"
          {...register("first_name")}
        />
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="last_name">
          Last name{" "}
        </label>
        <input
          className="formInput"
          placeholder="enter your last name"
          type="text"
          id="last_name"
          {...register("last_name")}
        />
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="birthday">
          Birthday{" "}
        </label>
        <input
          className="formInput"
          type="date"
          id="birthday"
          {...register("birthday")}
        />
      </div>
      <div className="formButtons">
        <button className="formButtonCreate">
          {updateInfo ? `Update` : `Create`}
        </button>
        <button className="formButtonCancel">Cancel</button>
      </div>
    </form>
  );
};

export default FormUsers;
