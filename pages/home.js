import Link from 'next/link';


const Home = () => {
  const redirectToProfile = () => {
    // Replace '/profile' with the path to your profile page
    window.location.href = '/profile';
  };

  return (
    <div className="container">
      <h1>Welcome to My Homepage</h1>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <button type="submit" className="signin-btn">Sign In</button>
          <Link href="/profile">
            <a className="profile-btn">Create Profile Page</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
