// import "./App.css";
// import contacts from "./contacts.json";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import s from "./Phonebook.module.css";

function App() {
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
