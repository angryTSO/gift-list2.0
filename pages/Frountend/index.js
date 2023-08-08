import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import styles from '@/styles/index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>My Homepage</h1>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.userIcon}>
          <Link href="/login" passHref>
            
          <FaUserCircle size={45} /> {/* Adjust the size value */}
            
          </Link>
        </div>
      </header>
      <main className={styles.main}>
      
            <button type="button">
            <Link href="/profile">
            profile
            </Link>
            </button>
      </main>

    </div>
  );
};

export default Home;
