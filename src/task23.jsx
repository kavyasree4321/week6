import React from 'react';

function task23() {
 
  function Button({ label, className }) {
    return (
      <button className={btn ${className}} style={styles.button}>
        {label}
      </button>
    );
  }


  return (
    <div style={styles.container}>
      <h1>Reusable Button Component</h1>
      
      <Button 
        label="Primary Button" 
        className="primary" 
      />
      <Button 
        label="Secondary Button" 
        className="secondary" 
      />
      <Button 
        label="Danger Button" 
        className="danger" 
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
  }
};

const customStyles = `
  .primary {
    background-color: #007bff;
    color: white;
  }
  .secondary {
    background-color: #6c757d;
    color: white;
  }
  .danger {
    background-color: #dc3545;
    color: white;
  }
`;


const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);

export default task23;
      
    