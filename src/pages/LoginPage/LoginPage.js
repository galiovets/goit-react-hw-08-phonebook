import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../RegisterPage/RegisterPage.styled';
import { Title } from 'pages/HomePage/HomePage.styled';
import {
  FormStyled,
  FormInput,
  FormLabel,
  AddButton,
} from 'components/Form/Form.styled';
import { logIn } from '../../redux/auth/auth-operations';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Login</Title>
      <FormStyled onSubmit={handleSubmit}>
        <FormLabel>
          <FormInput
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Email must contain @ sign"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
        </FormLabel>
        <AddButton type="submit">Log In</AddButton>
      </FormStyled>
    </Container>
  );
}

export default LoginPage;
