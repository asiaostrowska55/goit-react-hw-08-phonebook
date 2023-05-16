import css from './Header.module.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
