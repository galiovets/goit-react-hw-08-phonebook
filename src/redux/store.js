import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contacts from './contacts/contacts-reducer';
import authSlice from './auth/auth-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contacts,
  },
  middleware,
});

// const rootReducer = combineReducers({
//   contacts: contacts,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: middleware,
// });

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: middleware,
// });

export const persistor = persistStore(store);
