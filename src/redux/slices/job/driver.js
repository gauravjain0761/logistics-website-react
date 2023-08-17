import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isJobAlertLoading: false,
  jobAlertError: null,
  jobAlert: {
    data: [],
    pageCount: 0,
    dataCount: 0,
  },
  isJobActiveAlertLoading: false,
  jobActiveAlertError: null,
  jobActiveAlert: {
    data: [],
    pageCount: 0,
    dataCount: 0,
  },
};


const slice = createSlice({
  name: "driverJob",
  initialState,
  reducers: {
    // START LOADING
    startJobAlertLoading(state) {
      state.isJobAlertLoading = true;
    },

    // HAS ERROR
    hasJobAlertError(state, action) {
      state.isJobAlertLoading = false;
      state.error = action.payload;
    },

    // SET JOB ALERT
    setJobAlert(state, action) {
      state.isLoading = false;
      state.jobAlert.data = action.payload.data;
      state.jobAlert.dataCount = action.payload.data.length;
      state.jobAlert.pageCount = action.payload.meta?.last_page;
    },
  },
 
});
const sliceActive = createSlice({
  name: "driverActiveJob",
  initialState,
  reducers: {
    // START LOADING
    startJobActiveAlertLoading(state) {
      state.isJobActiveAlertLoading = true;
    },

    // HAS ERROR
    hasJobActiveAlertError(state, action) {
      state.isJobActiveAlertLoading = false;
      state.error = action.payload;
    },

    // SET JOB ALERT
    setJobActiveAlert(state, action) {
      state.isLoading = false;
      state.JobActiveAlert.data = action.payload.data;
      state.JobActiveAlert.dataCount = action.payload.data.length;
      state.JobActiveAlert.pageCount = action.payload.meta?.last_page;
    },
  },
  
});

// Reducer
export default slice.reducer;
// export default{ sliceActive.reducer};

// Actions
export const { startJobAlertLoading } = slice.actions;
export const { startJobActiveAlertLoading } = sliceActive.actions;

// ----------------------------------------------------------------------

export function getJobAlert({ page = 1, pageSize = 10 }) {
  console.log("pagepage", page, pageSize);
  return async (dispatch) => {
    dispatch(slice.actions.startJobAlertLoading());
    try {
      const response = await axiosInstance.get("api/auth/jobs/list", {
        params: { status: "pending", page: Number(page), pageSize: pageSize },
      });
      dispatch(slice.actions.setJobAlert(response?.data?.view_data));
    } catch (error) {
      dispatch(slice.actions.hasJobAlertError(error));
    }
  };
}
export function getJobActiveAlert({ page = 1, pageSize = 10 }) {
  console.log("pafgee", page, pageSize);
  return async (dispatch) => {
    dispatch(sliceActive.actions.startJobActiveAlertLoading());
    try {
      const response = await axiosInstance.get("api/auth/jobs/list", {
        params: { status: "active", page: Number(page), pageSize: pageSize },
      });
      dispatch(sliceActive.actions.setJobActiveAlert(response?.data?.view_data));
    } catch (error) {
      dispatch(sliceActive.actions.hasJobActiveAlertError(error));
    }
  };
}