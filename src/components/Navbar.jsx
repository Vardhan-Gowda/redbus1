import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: 'red', padding: '1rem', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '1rem', color: '#fff' }}>About</Link>
      <Link to="/contact" style={{ marginRight: '1rem', color: '#fff' }}>Contact</Link>
      <Link to="/login" style={{ marginRight: '1rem', color: '#fff' }}>Login</Link>
      <Link to="/logout" style={{ color: '#fff' }}>Logout</Link>
    </nav>
  );
}
