import { useState } from "react";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setPasswordMatchError(true);
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new MongoDB client
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      // Connect to the MongoDB server
      await client.connect();

      // Access the database and collection
      const db = client.db("Cluster21379");
      const collection = db.collection("users");

      // Insert the user data into the collection
      const result = await collection.insertOne({
        firstName,
        lastName,
        email,
        username,
        password: hashedPassword, // Store the hashed password
      });
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Close the MongoDB client
      await client.close();
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Retype Password:
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </label>
        <br />
        {passwordMatchError && (
          <p style={{ color: "red" }}>Passwords do not match.</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

/*import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios'; // Import axios for making HTTP requests

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      alert('Passwords do not match.');
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

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
*/
