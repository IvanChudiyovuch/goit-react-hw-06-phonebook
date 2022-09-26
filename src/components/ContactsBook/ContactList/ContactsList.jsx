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

// import PropTypes from 'prop-types';
// import { ContactsListItem } from './ContactsListItem';
// import { List, ListItem } from './ContactsList.styled';

// export const ContactsList = ({ contacts, onDeleteContact }) => {
//   return (
//     <List>
//       {contacts.map(({ id, name, number }) => (
//         <ListItem key={id}>
//           <ContactsListItem
//             name={name}
//             number={number}
//             onDeleteContact={() => onDeleteContact(id)}
//           />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
