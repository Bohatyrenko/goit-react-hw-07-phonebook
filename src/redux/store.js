import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './phoneBook/phonebook-reducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './auth/auth-reducers';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['phonebookFilter'],
// };

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: authReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
  devTools: true,
});

// const persistor = persistStore(store);
// export const configs = { store, persistor };
