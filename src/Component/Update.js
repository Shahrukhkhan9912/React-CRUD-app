import React, { useState,useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";


const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('CheckBox Value'));
  }, [])
  

  const postData = () => {
    axios.post('https://642dae19bf8cbecdb40c6b31.mockapi.io/fakeDamoData',{
        firstName,
        lastName,
        checkBox
    })}

    const updateAPIData = () =>{
        axios.put(`https://642dae19bf8cbecdb40c6b31.mockapi.io/fakeDamoData/${id}`,{
            firstName,
            lastName,
            checkBox
        })
    } 

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkBox}
            onChange={(e) => setCheckbox(!checkBox)}
          />
        </Form.Field>
        <Link to='/read'> <Button onClick={updateAPIData} type="submit">
          Update
        </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Update;
