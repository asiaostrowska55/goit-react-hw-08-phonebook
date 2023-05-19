import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        name="email"
        placeholder="Enter email"
        required
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        name="password"
        placeholder="Enter password"
        required
      />

      <Button
        type="submit"
        variant="outlined"
        style={{ width: '100px', marginTop: '30px', alignSelf: 'center' }}
      >
        Log In
      </Button>
    </form>
  );
};
