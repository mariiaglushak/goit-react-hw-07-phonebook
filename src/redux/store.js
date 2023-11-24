import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactsReducer } from "./contacts/contacts.reducer";
import { filterReducer } from "./filter/filter.reducer";




const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
    reducer: {
        contactsStore: persistReducer(persistConfig, contactsReducer),
        filterStore: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});



