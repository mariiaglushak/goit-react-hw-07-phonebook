import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Input from 'components/Input/Input';
import AddContactBtn from 'components/Button/AddContactBtn';
import { addContacts } from 'redux/contacts/contacts.reducer';
import { FofmBasic } from './ContactFormStyle';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
 

  const handleFormInput = e => {
    const inputNameValue = e.target.value;
    const inputName = e.target.name;
    
    switch (inputName) {
      case 'name': {
        setName(inputNameValue);
        return;
      }
      case 'number': {
        setNumber(inputNameValue);
        return;
      }
      default:
        return;
    }
  };


  const handlerFormSubmit = ({ name, number }) => {
    const normalizeName = name.toLowerCase();
    const ArrayNames = contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
    );
    if (ArrayNames) {
      alert(`${name} вже є в книзі`);
      return;
    }
    dispatch(addContacts({ id: nanoid(), name: name, number: number }, ...contacts))
  };


  const handlerSubmitForm = e => {
    e.preventDefault();
    handlerFormSubmit({ name, number });
    resetState();
  };

  
  const resetState = () => {
    setName('');
    setNumber('');
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
        value={number}
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
