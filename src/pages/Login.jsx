import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
