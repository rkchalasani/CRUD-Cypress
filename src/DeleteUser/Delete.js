import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://crudcrud.com/api/038a6f57303e4a0daa90f541e8f60a37/users`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const getData = async () => {
    await axios
      .get(`https://crudcrud.com/api/038a6f57303e4a0daa90f541e8f60a37/users`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (_id) => {
    axios
      .delete(
        `https://crudcrud.com/api/038a6f57303e4a0daa90f541e8f60a37/users/${_id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <div className="tablediv  container">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">colour</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="tableclass table-dark" id="table_body">
            {apiData.map((data) => {
              return (
                <tr>
                  <td>{data._id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.colour}</td>
                  <td>
                    <button
                      className="delete-btn"
                      color="red"
                      onClick={() => onDelete(data._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
