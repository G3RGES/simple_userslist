import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  // const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  // const emailChangeHandler = (event) => {
  //   setUserEmail(event.target.value);
  // };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)!",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age! (> 0)",
      });
      return;
    }

    // console.log(username, userEmail, userAge);
    // setUserEmail("");
    setUsername("");
    setUserAge("");

    onAddUser(username, userAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />

          {/* <label htmlFor="email">Email (Optional)</label>
        <input
          value={userEmail}
          id="email"
          type="email"
          onChange={emailChangeHandler}
        /> */}

          <label htmlFor="age">Age</label>
          <input
            value={userAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
