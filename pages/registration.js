import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios'; // Import axios for making HTTP requests

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setPasswordMatchError(true);
      return;
    }

    try {
      const response = await axios.post('/api/register', {
        username,
        password,
      });

      if (response.status === 200) {
        alert('User registered successfully!');
      } else {
        alert('Error registering user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user.');
    }
  };

  return (
    <>
      <Head>
        <title>Registration Page</title>
      </Head>
      <div className="container">
        <h1>Registration Page</h1>
        <div className="registration-form">
          <form onSubmit={handleRegistration}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="retypePassword">Re-type Password:</label>
            <input
              type="password"
              id="retypePassword"
              name="retypePassword"
              placeholder="Re-type your password"
              required
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />

            {passwordMatchError && (
              <p style={{ color: 'red' }}>Passwords do not match.</p>
            )}

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
