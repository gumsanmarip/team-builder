import './App.css';
import Form from './Form';
import React, { useState } from 'react';

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

    if (!newTeam.username || !newTeam.email || !newTeam.role) {
      setError("All fields are required, ya chump!!!");
    } else {
      setTeammates(teammates.concat(newTeam));
      setFormValues(initialFormValues);
    }
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
