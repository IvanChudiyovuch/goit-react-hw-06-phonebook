import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';
import { List, ListItem } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const itemContact = useSelector(getContacts);
  const filterContact = useSelector(getFilter);

  const normalizeFilter = filterContact.toLowerCase();
  const visibleContacts = itemContact.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactsListItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
