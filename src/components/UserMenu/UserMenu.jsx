import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Hi, {user.name}!</p>
      <Button
        type="submit"
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
