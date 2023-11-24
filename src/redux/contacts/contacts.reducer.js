import { createSlice } from "@reduxjs/toolkit";

const initialState={
    contacts: []
}

const contactsSlice = createSlice({
  
  name: "contacts",
 
  initialState,

  reducers: {
    addContacts(state, action) {
        state.contacts=[...state.contacts, action.payload]
    },
    deleteContacts(state, action) {
        state.contacts=state.contacts.filter(contact => contact.id !== action.payload)
    },
   
  },
});


export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;



