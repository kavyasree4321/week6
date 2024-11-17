import React from 'react';

function App() {

  return (
    <div>
      <h1>Prop Types Example</h1>
      <UserCard name="Alice Johnson" email="alice.johnson@example.com" age={30} />
      <UserCard name="Bob Smith" email="bob.smith@example.com" age={25} />
      
    </div>
  );
}


function UserCard({ name, email, age }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}


UserCard.propTypes = {
  name: PropTypes.string.isRequired,  
  email: PropTypes.string.isRequired, 
};

UserCard.defaultProps = {
  age: 18,  
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