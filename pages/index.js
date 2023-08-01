import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/index.module.css'; // Import the CSS module

const Home = () => {
  // State to handle form input (username and password)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission (not implemented yet)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., login)
    console.log('Form submitted!');
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Homepage</title>
      </Head>
      <div className={styles.container}> {/* Use the CSS class from the module */}
        <h1 className={styles.title}>Welcome to My Homepage</h1>
        <div className={styles['login-form']}> {/* Use other CSS classes from the module */}
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
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

            <button type="submit" className="signin-btn">
              Sign In
            </button>

            <button type="button">
            <Link href="/registration">
            Create username
            </Link>
            </button>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default Home;
