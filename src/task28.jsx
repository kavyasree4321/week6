import React from 'react';

function App() {
  
  return (
    <div style={styles.appContainer}>
      <h1>Notification Types Example</h1>
      <Notification type="success" message="Operation was successful!" />
      <Notification type="error" message="Something went wrong!" />
      <Notification type="info" message="Here is some information." />
    </div>
  );
}


function Notification({ type, message }) {
 
  const notificationStyle = styles[type] || styles.info; // Default to 'info' style if no type is matched

  return (
    <div style={{ ...styles.notification, ...notificationStyle }}>
      <strong>{message}</strong>
    </div>
  );
}


const styles = {
  appContainer: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  notification: {
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#fff',
  },
  success: {
    backgroundColor: '#28a745', // Green
  },
  error: {
    backgroundColor: '#dc3545', // Red
  },
  info: {
    backgroundColor: '#17a2b8', // Blue
  },
};

export default App;