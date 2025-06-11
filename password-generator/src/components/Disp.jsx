import React, { useEffect, useState } from 'react';

function Disp() {
  const [savedPasswords, setSavedPasswords] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('passwords')) || [];
    setSavedPasswords(saved);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#333' }}>Saved Passwords</h2>
      {savedPasswords.length > 0 ? (
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
          {savedPasswords.map((pass, index) => (
            <li key={index}>{pass}</li>
          ))}
        </ol>
      ) : (
        <p style={{ color: '#888' }}>No saved passwords found.</p>
      )}
    </div>
  );
}

export default Disp;
