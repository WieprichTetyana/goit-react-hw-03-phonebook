import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import styled from 'styled-components';

const LOCAL_STORAGE_KEY = 'contacts';

const StyledApp = styled.div`
  text-align: center;
  display: block;
  max-width: 450px;
  width: 50%;
  padding: 20px;
  margin: 0 auto;
  background-color: #f6f2f2;
  box-shadow: 3px 4px 7px 3px lightgray;
`;

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      this.setState({ contacts: storedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handleNameChange = event => {
    this.setState({ ...this.state, name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ ...this.state, number: event.target.value });
  };

  handleAddContact = () => {
    const { name, number, contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name === name.trim()
    );

    if (existingContact) {
      alert(`${name} is already in contacts!`);
      this.resetFormFields();
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  resetFormFields = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  handleDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <StyledApp>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          filter={filter}
          handleFilterChange={this.handleFilterChange}
          onDeleteContact={this.handleDeleteContact}
        />
      </StyledApp>
    );
  }
}

export default App;
