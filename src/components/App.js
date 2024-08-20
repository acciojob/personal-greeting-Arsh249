
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState('');

  const handleInputChange = (event) =>{
    setName = event.target.value;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p style={{ fontSize: '20px', marginTop: '20px' }}>
        {name ? `Hello, ${name}!` : 'Please enter your name'}
      </p>
    </div>
  )
}

export default App
