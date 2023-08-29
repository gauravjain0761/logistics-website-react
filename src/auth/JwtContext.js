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
      if (response.status === 401) {
        router.push("/auth/login");
        dispatch({
          type: "LOGOUT",
        });
      }
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

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
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register,
    ]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
