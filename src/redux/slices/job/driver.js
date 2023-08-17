import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isJobAlertLoading: false,
  jobAlertError: null,
  jobAlert: {
    data: [],
    page: 1,
    pageSize: 10,
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

// Reducer
export default slice.reducer;

// Actions
export const { startJobAlertLoading } = slice.actions;

// ----------------------------------------------------------------------

export function getJobAlert({ page = 1, pageSize = 10 }) {
  return async (dispatch) => {
    dispatch(slice.actions.startJobAlertLoading());
    try {
      const response = await axiosInstance.get("/api/products", {
        params: { status: 1, page: Number(page), pageSize: pageSize },
      });
      dispatch(slice.actions.setJobAlert(response?.data?.view_data));
    } catch (error) {
      dispatch(slice.actions.hasJobAlertError(error));
    }
  };
}
