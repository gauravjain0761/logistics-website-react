import PropTypes from "prop-types";
import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";
// utils
import axios from "../utils/axios";
import localStorageAvailable from "../utils/localStorageAvailable";
//
import { isValidToken, setSession } from "./utils";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
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
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === "REGISTER") {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

const firebaseApp = initializeApp(FIREBASE_API);
console.log("firebaseApp", firebaseApp);

const AUTH = getAuth(firebaseApp);

const GOOGLE_PROVIDER = new GoogleAuthProvider();

const FACEBOOK_PROVIDER = new FacebookAuthProvider();

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const storageAvailable = localStorageAvailable();
  const { enqueueSnackbar } = useSnackbar();

  const initialize = useCallback(async () => {
    try {
      const accessToken = storageAvailable
        ? localStorage.getItem("accessToken")
        : "";

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get("api/auth/profile/my-profile");

        const user = response?.data?.view_data;

        dispatch({
          type: "INITIAL",
          payload: {
            isAuthenticated: true,
            user: user,
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
    } catch (error) {
      console.error(error);
      const { response } = error;
      dispatch({
        type: "INITIAL",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
      dispatch({
        type: "LOGOUT",
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize, router]);

  const socialLogin = async (initialValues) => {
    await axios
      .post("api/auth/social-login", initialValues)
      .then((response) => {
        if (response?.status === 200) {
          const { access_token, user } = response.data;
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
          setSession(access_token);

          dispatch({
            type: "LOGIN",
            payload: {
              user,
            },
          });
        } else {
          console.log("error", response?.error);
        }
      })
      .catch((error) => {
        console.log(error, "error");
        const { response } = error;

        enqueueSnackbar(response.data.error, {
          variant: "error",
        });
      });
  };

  const loginWithGoogle = useCallback(() => {
    signInWithPopup(AUTH, GOOGLE_PROVIDER)
      .then((response) => {
        let initialValues = {
          email: "",
          social_type: "gmail",
        };

        initialValues.email = response?.user?.email;

        socialLogin(initialValues);
      })
      .catch((error) => {
        console.log("Error Google Login", error);
      });
  }, []);

  const loginWithFacebook = useCallback(() => {
    signInWithPopup(AUTH, FACEBOOK_PROVIDER)
      .then((response) => {
        let initialValues = {
          email: "",
          social_type: "facebook",
        };

        initialValues.email = response?.user?.email;

        socialLogin(initialValues);
      })
      .catch((error) => {
        const errorMessage = error?.message;
        console.log("Error Facebook Login", errorMessage);
      });
  }, []);

  // LOGIN
  const login = useCallback(async (data) => {
    try {
      const response = await axios.post("api/auth/login", {
        ...data,
      });
      const { access_token, user } = response.data;
      enqueueSnackbar(response.data.message, {
        variant: "success",
      });
      setSession(access_token);

      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    } catch (error) {
      const { response } = error;
      enqueueSnackbar(response.data.error, {
        variant: "error",
      });
    }
  }, []);

  // REGISTER
  const register = useCallback(async (data) => {
    const response = await axios.post("/api/account/register", {
      ...data,
    });
    const { access_token, user } = response.data;

    localStorage.setItem("accessToken", access_token);

    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    try {
      const response = await axios.post("api/auth/logout");
      enqueueSnackbar(response.data.message, {
        variant: "success",
      });
      if (AUTH) {
        signOut(AUTH)
          .then((response) => {
            console.log("logout", response);
          })
          .catch((error) => {
            console.log("Firebase logout", error);
          });
      }
      router.push("/auth/login");
      setSession(null);
      dispatch({
        type: "LOGOUT",
      });
    } catch (error) {
      const { response } = error;
      if (response.status === 401) {
        router.push("/auth/login");
        dispatch({
          type: "LOGOUT",
        });
      }
      enqueueSnackbar(response?.data?.error, {
        variant: "error",
      });
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: "jwt",
      login,
      register,
      logout,
      loginWithGoogle,
      loginWithFacebook,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register,
      loginWithGoogle,
      loginWithFacebook,
    ]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
