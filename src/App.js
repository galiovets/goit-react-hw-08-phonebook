import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getCurrentUser } from './redux/auth/auth-operations';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
// import RegisterPage from 'pages/RegisterPage';
// import Navigation from 'components/Navigation';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
// import {
//   PhonebookTitle,
//   ContactTitle,
// } from 'components/Title/Title.styled';
// import Form from 'components/Form';
// import ContactsList from 'components/Contacts/ContactList';
// import Filter from 'components/Filter';
// import HomePage from 'pages/HomePage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {/* <Navigation /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Suspense>
      {/* <PhonebookTitle>Phonebook</PhonebookTitle>
      <Form />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactsList /> */}
    </Container>
  );
}
