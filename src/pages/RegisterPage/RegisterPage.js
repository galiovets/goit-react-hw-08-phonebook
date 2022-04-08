import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Container } from './RegisterPage.styled';
import { Title } from 'pages/HomePage/HomePage.styled';
import {
  FormStyled,
  FormInput,
  FormLabel,
  AddButton,
} from 'components/Form/Form.styled';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <Container>
      <Title>Register</Title>
      <FormStyled onSubmit={handleSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
            required
            value={name}
            onChange={handleChange}
          />
        </FormLabel>
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
        <AddButton type="submit">Sign Up</AddButton>
      </FormStyled>
    </Container>
  );
}

export default RegisterPage;
