import React from 'react';

function App() {
 
  const user = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  return (
    <div>
      <h1>Props Passing Example</h1>
     
      <IntermediateParent user={user} />
    </div>
  );
}

function IntermediateParent({ user }) {

  return (
    <div style={styles.parentContainer}>
      <h2>Intermediate Parent</h2>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  
  return (
    <div style={styles.childContainer}>
      <h3>Child Component</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}


const styles = {
  parentContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  childContainer: {
    padding: '15px',
    marginTop: '10px',
    backgroundColor: '#e9e9e9',
    borderRadius: '5px',
  }
};

export default App;