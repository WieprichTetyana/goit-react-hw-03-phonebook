import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: auto;
  font-size: calc((1vh + 1vw));
  border: 3px solid lightblue;
  background-color: #71b4f7;
  box-shadow: 3px 4px 7px 3px lightgray;

  padding: 40px 20px;
  border-radius: 12px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  padding: 10px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #0b536f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactForm = ({
  name = '',
  number = '',
  onNameChange,
  onNumberChange,
  onAddContact,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onAddContact();
  };

  const numberId = nanoid();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name">Name</StyledLabel>
      <StyledInput
        type="text"
        id="name"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onNameChange}
        autoComplete="name"
      />
      <StyledLabel htmlFor="number">Number</StyledLabel>
      <StyledInput
        type="tel"
        id="number"
        name={numberId}
        value={number}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onNumberChange}
        autoComplete="tel"
      />
      <StyledButton type="submit">Add Contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
