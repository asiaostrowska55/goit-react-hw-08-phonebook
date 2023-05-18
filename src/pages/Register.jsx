import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Sign up here</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
