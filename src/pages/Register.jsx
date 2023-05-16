import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
