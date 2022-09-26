import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Lable, Input, Forma } from './Form.styled';
import { Button } from '../ContactList/ContactsList.styled';
import { addItem } from 'redux/actions';
import { getContacts } from 'redux/selectors';

export const Form = () => {
  const itemContact = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleValueInputChange = event => {
    const { name, value } = event.target;

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

  const handleSubmit = event => {
    event.preventDefault();

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

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Lable>
        Name
        <Input
          value={name}
          onChange={handleValueInputChange}
          type="text"
          name="name"
          placeholder="Jacob Mercer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="
            Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Lable>

      <Lable>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleValueInputChange}
          placeholder="___-__-__"
        />
      </Lable>
      <Button type="submit">Add contact</Button>
    </Forma>
  );
};
