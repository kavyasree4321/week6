import React from 'react';

function App() {
  return (
    <div style={styles.appContainer}>
      <h1>Passing Children to Components Example</h1>
      
      <Card>
        <h2>Title of the Card</h2>
        <p>This is the content inside the card. It can be any React elements!</p>
        <button>Click Me</button>
      </Card>

      <Card>
        <h2>Another Card</h2>
        <p>Content for the second card goes here.</p>
      </Card>
    </div>
  );
}


function Card({ children }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        {children} 
      </div>
    </div>
  );
}


const styles = {
  appContainer: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '20px auto',
    width: '300px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    padding: '20px',
  },
};

export default App;