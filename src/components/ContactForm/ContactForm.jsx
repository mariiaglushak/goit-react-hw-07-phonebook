import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from 'components/Input/Input';
import AddContactBtn from 'components/Button/AddContactBtn';
import { addContact } from 'redux/contacts/contacts.reducer';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { FofmBasic } from './ContactFormStyle';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 

  const handleFormInput = e => {
    const inputNameValue = e.target.value;
    const inputName = e.target.name;
    
    switch (inputName) {
      case 'name': {
        setName(inputNameValue);
        return;
      }
      case 'number': {
        setPhone(inputNameValue);
        return;
      }
      default:
        return;
    }
  };


  const handlerFormSubmit = ({ name, phone }) => {
    const contact = {
      name: name,
      phone: phone,
    };

    const normalizeName = name.toLowerCase();
    const ArrayNames = contacts.find(
      item => item.name.toLowerCase() === normalizeName
    );
    if (ArrayNames) {
      alert(`${name} вже є в книзі`);
      return;
    }

    dispatch(addContact(contact))
  };


  const handlerSubmitForm = e => {
    e.preventDefault();
    handlerFormSubmit({ name, phone });
    resetState();
  };

  
  const resetState = () => {
    setName('');
    setPhone('');
  };

  return (
    <FofmBasic onSubmit={handlerSubmitForm}>
      <Input
        onChange={handleFormInput}
        value={name}
        type="text"
        name="name"
        required="required"
      ></Input>
      <Input
        value={phone}
        onChange={handleFormInput}
        type="tel"
        name="number"
        required="required"
      ></Input>
      <AddContactBtn text="add contact" />
    </FofmBasic>
  );
};

export default ContactForm;
