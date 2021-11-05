import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ContactElement from "../ContactElement";
import s from "./ContactList.module.css";
import actions from "../../redux/actions";
import { getVisibleContacts } from "../../redux/selectors";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactElement
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,

  deleteContact: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(ContactList);

// Без toolkit

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import ContactElement from "../ContactElement";
// import s from "./ContactList.module.css";
// import actions from "../../redux/actions";

// function ContactList({ contacts, deleteContact }) {
//   console.log(contacts);
//   return (
//     <ul className={s.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className={s.item}>
//           <ContactElement
//             id={id}
//             name={name}
//             number={number}
//             deleteContact={deleteContact}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function getVisibleContacts(contacts, filter) {
//   const normalizedFilter = filter.toLocaleLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter)
//   );
// }

// const mapStateToProps = ({ contacts: { items, filter } }) => {
//   console.log(filter);
//   return {
//     contacts: getVisibleContacts(items, filter),
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.prototype = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,

//   deleteContact: PropTypes.func.isRequired,
// };

// PropTypes.checkPropTypes(ContactList);
