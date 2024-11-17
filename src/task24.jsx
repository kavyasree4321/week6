import React from 'react';

function task24() {
  
  function Profile({ name, location, profilePicture }) {
    return (
      <div style={styles.profileContainer}>
        <img src={profilePicture} alt=(${name}'s profile} style={styles.profileImage})>
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
    );
  }

  
  const profileData = {
    name: "John Doe",
    location: "San Francisco, CA",
    profilePicture: "https://via.placeholder.com/150"
  };

 
  return (
    <div style={styles.appContainer}>
      <h1>Profile</h1>
      <Profile 
        name={profileData.name} 
        location={profileData.location} 
        profilePicture={profileData.profilePicture} 
      />
    </div>
  );
}


const styles = {
  appContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  profileContainer: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  }
};

export default task24;