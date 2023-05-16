import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebook/contactSlicer';
import { filterReducer } from './phonebook/filterSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
