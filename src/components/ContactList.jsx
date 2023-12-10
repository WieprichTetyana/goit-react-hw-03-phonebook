import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: auto;
  border: 3px solid lightblue;
  background-color: #71b4f7;
  box-shadow: 3px 4px 7px 3px lightgray;
  padding: 0;
  border-radius: 12px;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  padding: 5px 10px;
  background-color: white;

  border: none;
  outline: none;
  border-bottom: 1px solid;
  border: 1px solid #272525;

  border-radius: 5px;
  display: flex;
  flex-direction: row;
  max-width: 450px;
  margin: 10px;

  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #ff6961;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = id => {
    onDeleteContact(id);
  };

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <StyledListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default ContactList;
