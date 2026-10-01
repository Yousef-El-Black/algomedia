import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import msgSlice from "./slicers/msgSlice";

const storage = {
  getItem: async (key: string) => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  },
  setItem: async (key: string, value: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
    return Promise.resolve();
  },
  removeItem: async (key: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
    return Promise.resolve();
  },
};

// 1. Combine all your reducers
const rootReducer = combineReducers({
  msg: msgSlice, // Add your message slice reducer here
});

// 2. Set up your persist configuration
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['counter'] // Optional: Only persist specific reducers
  // blacklist: ['someTransientSlice'] // Optional: Exclude specific reducers
};

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types to prevent non-serializable errors
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Export the persistor object
export const persistor = persistStore(store);
