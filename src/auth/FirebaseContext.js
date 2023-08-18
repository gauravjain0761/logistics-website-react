import PropTypes from "prop-types";
import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// config
import { FIREBASE_API } from "../config-global";
import { result } from "lodash";

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthFirebaseContext = createContext(null);

// ----------------------------------------------------------------------

const firebaseApp = initializeApp(FIREBASE_API);
console.log("firebaseApp", firebaseApp);

const AUTH = getAuth(firebaseApp);

const GOOGLE_PROVIDER = new GoogleAuthProvider();

const FACEBOOK_PROVIDER = new FacebookAuthProvider();

AuthFirebaseContext.propTypes = {
  children: PropTypes.node,
};

export function AuthFirebaseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(() => {
    try {
      onAuthStateChanged(AUTH, async (user) => {
        if (user) {
          dispatch({
            type: "INITIAL",
            payload: {
              isAuthenticated: true,
              user: {
                ...user,
                role: "admin",
              },
            },
          });
        } else {
          dispatch({
            type: "INITIAL",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const loginWithGoogle = useCallback(() => {
    signInWithPopup(AUTH, GOOGLE_PROVIDER)
      .then((response) => {
        console.log("loginWithGoogle", response);
      })
      .catch((error) => {
        console.log("Error Google Login", error);
      });
  }, []);

  const loginWithFacebook = useCallback(() => {
    signInWithPopup(AUTH, FACEBOOK_PROVIDER)
      .then((response) => {
        console.log("loginWithFacebook", response);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Error Facebook Login", errorMessage);
      });
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    signOut(AUTH)
      .then((response) => {
        console.log("logout", response);
      })
      .catch((error) => {
        console.log("Firebase logout", error);
      });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: "firebase",
      loginWithGoogle,
      logout,
      loginWithFacebook,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      loginWithGoogle,
      logout,
      loginWithFacebook,
    ]
  );

  return (
    <AuthFirebaseContext.Provider value={memoizedValue}>
      {children}
    </AuthFirebaseContext.Provider>
  );
}
