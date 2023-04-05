import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName, checkBox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("CheckBox Value", checkBox);
  };

  useEffect(() => {
    axios
      .get("https://642dae19bf8cbecdb40c6b31.mockapi.io/fakeDamoData")
      .then((responce) => {
        setApiData(responce.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://642dae19bf8cbecdb40c6b31.mockapi.io/fakeDamoData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://642dae19bf8cbecdb40c6b31.mockapi.io/fakeDamoData")
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name </Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {apiData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell> {data.firstName}</Table.Cell>
              <Table.Cell> {data.lastName} </Table.Cell>
              <Table.Cell>
                {" "}
                {data.checkBox ? "Checked" : "Unchecked"}{" "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Link to="/update">
                  {" "}
                  <Button onClick={() => setData(data)} color="green">
                    {" "}
                    Update{" "}
                  </Button>{" "}
                </Link>{" "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Button onClick={() => onDelete(data.id)} color="red">
                  {" "}
                  Delete{" "}
                </Button>{" "}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default Read;
