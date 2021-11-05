// import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import s from "./Filter.module.css";
import actions from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.changeFilter(e.currentTarget.value));

  return (
    <label className={s.findLable}>
      Find contacts by name
      <input
        className={s.find}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Filter;

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(Filter);

// Без toolkit
// import PropTypes from "prop-types";
// import { connect} from "react-redux";
// import s from "./Filter.module.css";
// import actions from "../../redux/actions";

// function Filter({ value, onChange }) {
//   console.log(value);
//   return (
//     <label className={s.findLable}>
//       Find contacts by name
//       <input
//         className={s.find}
//         type="text"
//         value={value}
//         onChange={onChange}
//       ></input>
//     </label>
//   );
// }

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(actions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.prototype = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// PropTypes.checkPropTypes(Filter);
