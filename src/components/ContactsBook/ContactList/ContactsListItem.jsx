import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, ItenInfoText } from './ContactsList.styled';
import { delItem } from 'redux/actions';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(delItem(contact.id));
  };

  return (
    <>
      <ItenInfoText>{contact.name}:</ItenInfoText>
      <ItenInfoText>{contact.number}</ItenInfoText>
      <Button type="button" onClick={deleteContact}>
        Delete
      </Button>
    </>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

// import PropTypes from 'prop-types';
// import { Button, ItenInfoText } from './ContactsList.styled';

// export const ContactsListItem = ({ name, number, onDeleteContact }) => {
//   return (
//     <>
//       <ItenInfoText>{name}:</ItenInfoText>
//       <ItenInfoText>{number}</ItenInfoText>
//       <Button type="button" onClick={onDeleteContact}>
//         Delete
//       </Button>
//     </>
//   );
// };

// ContactsListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
