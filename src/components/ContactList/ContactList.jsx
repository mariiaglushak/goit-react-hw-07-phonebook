import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts.reducer';

import ContactItem from './ContactItem';

const ContactList = () => {
  
  const filter = useSelector(state=>state.filterStore.filter)
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  


  const clickDeletBtn = contactId => {
   
    dispatch(deleteContacts(contactId))
   
  };

 
  const getContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  
  };

  const contactElem = getContacts();
 



  return (
    <ul>
      {contactElem.map(({id,name,number}) => (
        <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={clickDeletBtn}
        id={id}
        text='Delete'

        />
     
      ))}
    </ul>
  );
};

export default ContactList;
