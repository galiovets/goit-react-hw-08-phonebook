// import { Container } from '../HomePage/HomePage.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Container } from '../RegisterPage/RegisterPage.styled';
import {
  // Container,
  ContactTitle,
} from './ContactsPage.styled';
// import {
//   PhonebookTitle,
//   ContactTitle,
// } from 'components/Title/Title.styled';
import Form from 'components/Form';
import ContactsList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';
import { MainText } from './ContactsPage.styled';

function ContactsPage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Form />
          <Filter />
          <ContactTitle>Contacts</ContactTitle>
          <ContactsList />
        </>
      ) : (
        <MainText>Please log in for access </MainText>
      )}
      {/* <PhonebookTitle>Phonebook</PhonebookTitle> */}
    </Container>
  );
}

export default ContactsPage;
