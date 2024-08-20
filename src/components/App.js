
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState(''); // 'name' holds the state, 'setName' updates it

  const handleInputChange = (event) => {
    setName(event.target.value); // Correctly using 'setName' to update the state
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange} // Triggers the state update when input changes
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p style={{ fontSize: '20px', marginTop: '20px' }}>
        {name ? `Hello, ${name}!` : 'Please enter your name'}
      </p>
    </div>
  )
}

export default App
