// pages/profile.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/profile.module.css';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [screenName, setScreenName] = useState('johnd');
  const [email, setEmail] = useState('john@example.com');
  const [profilePicture, setProfilePicture] = useState('');

  // State variables to store the existing information until submission
  const [existingName, setExistingName] = useState(name);
  const [existingScreenName, setExistingScreenName] = useState(screenName);
  const [existingEmail, setExistingEmail] = useState(email);
  const [existingProfilePicture, setExistingProfilePicture] = useState(profilePicture);

  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleScreenNameChange = (event) => {
    setScreenName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  const handleSubmit = () => {
    // Update existing info after submission
    setExistingName(name);
    setExistingScreenName(screenName);
    setExistingEmail(email);
    setExistingProfilePicture(profilePicture);
  };

  const containerClassName = `${styles.container} ${
    mode === 'dark' ? styles.darkMode : styles.lightMode
  }`;

  return (
    <div className={containerClassName}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Profile</h1>
        </div>
        <div className={styles.backLink}>
          <Link href="/">Back to Home</Link>
        </div>
        <button onClick={toggleMode} className={styles.toggleButton}>
          Toggle Mode
        </button>
      </header>
      <main className={styles.main}>
        <h2>Edit Profile</h2>
        <div className={styles.profileForm}>
          <div className={styles.existingInfoContainer}>
            <p>Your current name: {existingName}</p>
            <p>Your current screen name: {existingScreenName}</p>
            <p>Your current email: {existingEmail}</p>
            <img
              src={existingProfilePicture}
              alt="Profile"
              className={styles.profilePicture}
            />
          </div>
          <div className={styles.updateInputsContainer}>
            <label htmlFor="updateName" className={styles.profileLabel}>
              Update Name:
            </label>
            <input
              type="text"
              id="updateName"
              className={styles.profileInput}
              value={name}
              onChange={handleNameChange}
              placeholder="Update your name"
            />

            <label htmlFor="updateScreenName" className={styles.profileLabel}>
              Update Screen Name:
            </label>
            <input
              type="text"
              id="updateScreenName"
              className={styles.profileInput}
              value={screenName}
              onChange={handleScreenNameChange}
              placeholder="Update your screen name"
            />

            <label htmlFor="updateEmail" className={styles.profileLabel}>
              Update Email:
            </label>
            <input
              type="email"
              id="updateEmail"
              className={styles.profileInput}
              value={email}
              onChange={handleEmailChange}
              placeholder="Update your email"
            />

            <label htmlFor="updateProfilePicture" className={styles.profileLabel}>
              Update Profile Picture URL:
            </label>
            <input
              type="text"
              id="updateProfilePicture"
              className={styles.profileInput}
              value={profilePicture}
              onChange={handleProfilePictureChange}
              placeholder="Update profile picture URL"
            />

            <button onClick={handleSubmit} className={styles.submitButton}>
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
