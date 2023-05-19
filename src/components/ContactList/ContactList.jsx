import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/phonebook/contactSlicer';
import { selectFilter, selectContacts } from 'redux/selectors';
import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ContactsList = ({ storage }) => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterStatus = filterValue.status;
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  const handledDelete = id => {
    dispatch(deleteContact(id));
    localStorage.setItem(storage, JSON.stringify(contacts));
  };

  const listItems =
    filterContact === []
      ? ''
      : filterContact.map(item => {
          return (
            <ListItem key={item.id} id={item.id} className={css.element}>
              <ListItemText primary={`{item.name}: {item.number}`} />

              <Button
                onClick={() => handledDelete(item.id)}
                // className={css.btnDelete}
                type="submit"
                variant="outlined"
                size="small"
              >
                Delete
              </Button>
            </ListItem>
          );
        });

  return <ul className={css.listItem}>{listItems}</ul>;
};

export default ContactsList;
