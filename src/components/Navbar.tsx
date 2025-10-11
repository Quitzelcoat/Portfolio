import navStyle from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navStyle.navbar}>
      <h1>Logo</h1>

      <ul className={navStyle.navList}>
        <li>About</li>
        <li>Projects</li>
        <li>Design</li>
        <li>Blogs</li>
      </ul>
      <h2>Contact</h2>
    </nav>
  );
};

export default Navbar;
