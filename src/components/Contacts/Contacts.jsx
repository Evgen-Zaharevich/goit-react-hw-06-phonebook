// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { List, ListItem, Button } from 'components/Contacts/Contacts.styled';

export const Contacts = ({ showFilteredContacts }) => {
  const dispatch = useDispatch();

  console.log(showFilteredContacts);

  return (
    <List>
      {showFilteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteUser: PropTypes.func.isRequired,
// };
