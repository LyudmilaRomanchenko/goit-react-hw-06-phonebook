// import logo from "./logo.svg";
// import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import contacts from "./contacts.json";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import s from "./Phonebook.module.css";

function App() {
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  /////////////////////////////////////////////////
  // const addContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };
  //   //////////////////////////////////

  //   setContacts([contact, ...contacts]);
  // };

  // /////////////////////////////////
  // const changeFilter = (e) => {
  //   // console.log(e.currentTarget.value);
  //   setFilter(e.currentTarget.value);
  // };
  // /////////////////////////////

  // const getVisibleContact = () => {
  //   // console.log(contacts);
  //   const normalizeTodo = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizeTodo)
  //   );
  // };

  // ////////////////////////////////////
  // const deleteContact = (todoId) => {
  //   setContacts(
  //     (contacts) =>
  //       (contacts = contacts.filter((contact) => contact.id !== todoId))
  //   );
  // };
  // //////////////////////////////////

  // const visibleContact = getVisibleContact();

  return (
    <div className={s.container}>
      <div className={s.phonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={s.contactsContainer}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
