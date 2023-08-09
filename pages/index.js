
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import styles from '@/styles/index.module.css';

const Home = () => {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const containerClassName = `${styles.container} ${
    mode === 'dark' ? styles.darkMode : styles.lightMode
  }`;

  return (
    <div className={containerClassName}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>My Homepage</h1>
        </div>
        <div className={styles.userIcon}>
          <Link href="/login" passHref>
            <FaUserCircle />
          </Link>
        </div>
        <button onClick={toggleMode} className={styles.toggleButton}>
          Toggle Mode
        </button>
      </header>
      <main className={styles.main}>
        <h1>Welcome to My Homepage</h1>
        <button className={styles.redirectBtn}>
          <Link href="/login">Login</Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
