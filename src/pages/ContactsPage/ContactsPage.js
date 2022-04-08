import { Container } from '../RegisterPage/RegisterPage.styled';
import Form from 'components/Form';
import Filter from 'components/Filter';
import { ContactTitle } from './ContactsPage.styled';
import ContactsList from 'components/Contacts/ContactList';

function ContactsPage() {
  return (
    <Container>
      <Form />
      <Filter />
      <ContactTitle>Contacts</ContactTitle>
      <ContactsList />
    </Container>
  );
}

export default ContactsPage;
