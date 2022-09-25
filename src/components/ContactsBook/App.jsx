import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { Container } from './Container.styled';
import { addItem, delItem, changeFilter } from 'redux/actions';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const filterContact = useSelector(getFilter);
  const itemContact = useSelector(getContacts);

  const addContacts = (name, number) => {
    let newContact = {
      id: nanoid(5),
      name,
      number,
    };

    itemContact.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : dispatch(addItem(newContact));
  };

  const deleteContact = contactId => {
    dispatch(delItem(contactId));
  };

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(itemContact));
  }, [itemContact]);

  const normalizeFilter = filterContact.toLowerCase();
  const visibleContacts = itemContact.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <Container>
      <h1>Phonebook</h1>

      <Form onSubmit={addContacts} />

      <h2>Contacts</h2>

      <Filter value={filterContact} onChange={handleChangeFilter} />

      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
