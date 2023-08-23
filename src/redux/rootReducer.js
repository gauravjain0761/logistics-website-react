import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// slices
import driverJobReducer from "./slices/job/driver";
import customerJobReducer from "./slices/job/customer"

// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

export const driverJobPersistConfig = {
  key: "driverJob",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

export const customerJobPersistConfig = {
  key: "customerJob",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  driverJob: persistReducer(driverJobPersistConfig, driverJobReducer),
  customerJob:persistReducer(customerJobPersistConfig, customerJobReducer)
});

export default rootReducer;
