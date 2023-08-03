import React from 'react';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};

export default ContactList;