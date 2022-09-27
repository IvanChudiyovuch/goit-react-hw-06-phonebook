import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';
import { Container } from './Container.styled';
// import { getContacts } from 'redux/selectors';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
