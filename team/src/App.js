import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, { useState, useEffect } from 'react';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [teammates, setTeammates] = useState([]);
  const [formValues, setFormValues] = useState([initialFormValues]);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeam = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
      }
      setTeammates(teammates.concat(newTeam));
    }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Teammates</h1>
       <h2>{error}</h2>
       <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
       />
      </header>
    </div>
  );
}

export default App;
