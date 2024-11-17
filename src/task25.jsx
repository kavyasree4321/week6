import React from 'react';

function App() {
  
  function UserCard({ name, email }) {
    return (
      <div style={styles.card}>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    );
  }

 
  function UserList() {
   
    const users = [
      { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { name: 'Bob Smith', email: 'bob.smith@example.com' },
      { name: 'Charlie Brown', email: 'charlie.brown@example.com' }
    ];

    return (
      <div style={styles.userList}>
        <h1>User List</h1>
        {users.map((user, index) => (
          <UserCard 
            key={index} 
            name={user.name} 
            email={user.email} 
          />
        ))}
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      <UserList />
    </div>
  );
}


const styles = {
  appContainer: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  userList: {
    marginTop: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default App;