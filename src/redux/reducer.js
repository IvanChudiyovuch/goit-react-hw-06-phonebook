import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { addItem, delItem, changeFilter } from './actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer(initialState, {
  [addItem]: (state, action) => [...state, action.payload],
  [delItem]: (state, { payload }) =>
    state.filter(contact => {
      return contact.id !== payload;
    }),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
