import { Component } from "react";

class Book extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };
  addContact = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, number: prevState.number },
      ],
    }));
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContact = (id) => () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <form>
          <h1>Phonebook</h1>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(e) => this.setState({ number: e.target.value })}
          />
          <br />
          <button onClick={this.addContact}>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          placeholder="Search contacts"
          onChange={(e) =>
            this.setState({ filter: e.target.value }, this.getFilteredContacts)
          }
        />
        <ul>
          {this.getFilteredContacts().map((item) => (
            <li key={item.id}>
              {item.name}: {item.number} 
              <button onClick={this.deleteContact(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Book;
