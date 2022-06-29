import axios from "axios";
import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Delete from "../DeleteUser/Delete";
const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [colour, setColour] = useState("");

  function onFormSubmit(e) {
    let objdata = new Object();
    objdata.name = name;
    objdata.age = age;
    objdata.colour = colour;
    console.log(objdata);

    if (
      name == null ||
      name === "" ||
      age == null ||
      age === "" ||
      colour == null ||
      colour === ""
    ) {
      alert("Fill the required fields");
    } else {
      try {
        axios.post(
          "https://crudcrud.com/api/038a6f57303e4a0daa90f541e8f60a37/users",
          objdata
        );
      } catch (error) {
        console.log("error");
      }
    }
  }

  return (
    <div className="maindiv">
      <h1 className="para text-center">
        Here is the Data from the API in a table format
      </h1>
      <div className="maincontainer">
        <div className="formdiv">
          <form className="form">
            <div className="form-group">
              <label className="col-sm-2 col-form-label">Name</label>
              <input
                id="name-input"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                id="age-input"
                type="number"
                name="Age"
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
                placeholder="Enter your Age"
              />
            </div>
            <div className="form-group">
              <label>Colour</label>
              <input
                type="text"
                id="colour-input"
                name="colour"
                className="form-control"
                onChange={(e) => setColour(e.target.value)}
                placeholder="Enter colour"
              />
            </div>
            <div className="buttondiv">
              <button
                id="adduserbutton"
                type="submit"
                onClick={(e) => onFormSubmit(e)}
                className=" btn btn-dark"
              >
                ADD USER
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="DeleteComponent">
        <Delete />
      </div>
    </div>
  );
};

export default Home;
