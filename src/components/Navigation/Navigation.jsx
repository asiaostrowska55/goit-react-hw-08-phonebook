import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <NavLink className={css.link} to="/homepage">
            Home
          </NavLink>
          <NavLink className={css.link} to="/phonebook">
            Phonebook
          </NavLink>
        </>
      ) : (
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      )}
    </nav>
  );
};
