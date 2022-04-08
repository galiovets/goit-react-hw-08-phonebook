import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getAllContacts,
  isLoading,
} from 'redux/contacts/contacts-selectors';
import Loader from 'components/Loader';
import {
  ContactListStyled,
  ContactsText,
} from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { deleteContact } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const getLoading = useSelector(isLoading);
  const dispatch = useDispatch();

  return (
    <>
      {getLoading && <Loader />}
      {!getLoading && contacts.length > 0 ? (
        <ContactListStyled>
          {contacts.map(contact => {
            return (
              <ContactListItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => dispatch(deleteContact(contact.id))}
              />
            );
          })}
        </ContactListStyled>
      ) : (
        <ContactsText>No contacts have been added yet</ContactsText>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
