import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  onDeleteClick = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    console.log(this.state.contacts);
  };

  createContact = newContact => {
    this.setState(prevState => {
      if (
        this.state.contacts.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        alert(`${newContact.name} is already in contacts.`);
        return;
      }
      return {
        contacts: [
          ...prevState.contacts,
          {
            ...newContact,
            id: nanoid(),
          },
        ],
      };
    });
  };

  render() {
    let filteredContacts = this.state.contacts;

    filteredContacts = filteredContacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />

        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="tel">Number</label>
          <input
            type="tel"
            name="number"
            //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add contact</button>
        </form> */}

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          contacts={this.state.contacts}
          onDeleteClick={this.onDeleteClick}
        />
        {/* <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.handleChange} />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}
