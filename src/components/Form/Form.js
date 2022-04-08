import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContact } from 'redux/contacts/contacts-selectors';
import {
  fetchContacts,
  addContact,
} from 'redux/contacts/contacts-operations';
import {
  FormStyled,
  FormInput,
  FormLabel,
  AddButton,
} from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
            name.toLocaleLowerCase() || contact.number === number,
      )
    ) {
      return alert(`${name} is added`);
    }
    dispatch(addContact({ name, number }));

    reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
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
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number"
          value={number}
          onChange={handleChange}
        />
      </FormLabel>
      <AddButton type="submit">Add contact</AddButton>
    </FormStyled>
  );
}
