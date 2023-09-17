import { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} {contact.number}
            {this.props.onDeleteClick && (
              <button
                type="button"
                onClick={() => this.props.onDeleteClick(contact.id)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    );
  }
}
