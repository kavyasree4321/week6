import React from 'react';

function App() {

  const user = {
    name: 'Alice Johnson',
    
  };

  return (
    <div>
      <h1>Default Props Example</h1>
      
      <UserCard name={user.name} email={user.email} />
    </div>
  );
}

function UserCard({ name, email }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}


UserCard.defaultProps = {
  email: 'Not provided'
};


const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
};

export default App;