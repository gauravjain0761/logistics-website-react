import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isDriverLoading: false,
  DriverError: null,
  Driver: {
    data: [],
    pageCount: 0,
    dataCount: 0,
    page: 1,
    pageSize: 10,
  },
  isJobActiveLoading: false,
  jobActiveError: null,
  jobActive: {
    data: [],
    pageCount: 0,
    dataCount: 0,
    page: 1,
    pageSize: 10,
  },
  isJobHistoryLoading: false,
  jobHistoryError: null,
  jobHistory: {
    data: [],
    pageCount: 0,
    dataCount: 0,
    page: 1,
    pageSize: 10,
  },
};

const slice = createSlice({
  name: "driverJob",
  initialState,
  reducers: {
    // START LOADING
    startDriverLoading(state) {
      state.isDriverLoading = true;
    },

    startJobActiveLoading(state) {
      state.isJobActiveLoading = true;
    },
    startJobHistoryLoading(state) {
      state.isJobActiveLoading = true;
    },

    // HAS ERROR START
    hasDriverError(state, action) {
      state.isDriverLoading = false;
      state.error = action.payload;
    },

    hasJobActiveError(state, action) {
      state.isJobActiveLoading = false;
      state.error = action.payload;
    },
    hasJobHistoryError(state, action) {
      state.isJobActiveLoading = false;
      state.error = action.payload;
    },

    // HAS ERROR END

    // SET DRIVER LIST
    setDriver(state, action) {
      state.isDriverLoading = false;
      state.Driver.data = action.payload.data;
      state.Driver.dataCount = action.payload.data.length;
      state.Driver.pageCount = action.payload.meta?.last_page;
    },

    setDriverPage(state, action) {
      state.Driver.page = action.payload;
    },
    // SET JOB END

    // ====================================================

    // SET JOB ALERT
    setJobActive(state, action) {
      state.isJobActiveLoading = false;
      state.jobActive.data = action.payload.data;
      state.jobActive.dataCount = action.payload.data.length;
      state.jobActive.pageCount = action.payload.meta?.last_page;
    },

    setJobActivePage(state, action) {
      state.jobActive.page = action.payload;
    },
    // SET JOB END

    // =====================================================

    // SET JOB hISTORY
    setJobHistory(state, action) {
      state.isJobHistoryLoading = false;
      state.jobHistory.data = action.payload.data;
      state.jobHistory.dataCount = action.payload.data.length;
      state.jobHistory.pageCount = action.payload.meta?.last_page;
    },

    setJobHistoryPage(state, action) {
      state.jobHistory.page = action.payload;
    },
    // SET JOB HISTORY END
    setJobHistoryPageSize(state, action) {
      state.jobHistory.pageSize = action.payload;
    },
    // ========================================================
  },
});

// Reducer
export default slice.reducer;
// export default{ sliceActive.reducer};

// Actions
export const {
  startDriverLoading,
  setDriverPage,
  setJobActivePage,
  setJobHistoryPage,
  setJobHistoryPageSize,
} = slice.actions;

// ----------------------------------------------------------------------

export const getDriver = (params) => {
  return async (dispatch) => {
    dispatch(slice.actions.startDriverLoading());
    try {
      const response = await axiosInstance.get("api/auth/company/driver-list", {
        params: {
          ...params,
        },
      });
      dispatch(slice.actions.setDriver(response?.data?.view_data));
    } catch (error) {
      dispatch(slice.actions.hasDriverError(error));
    }
  };
};

export const getJobActive = (params) => {
  return async (dispatch) => {
    dispatch(slice.actions.startJobActiveLoading());
    try {
      const response = await axiosInstance.post(
        "api/auth/company/drivers-job",
        {
          type: "active",
          ...params,
        }
      );
      dispatch(slice.actions.setJobActive(response?.data?.view_data));
    } catch (error) {
      dispatch(slice.actions.hasJobActiveError(error));
    }
  };
};
export const getJobHistory = (params) => {
  return async (dispatch) => {
    dispatch(slice.actions.startJobHistoryLoading());
    try {
      const response = await axiosInstance.post(
        "api/auth/company/drivers-job",
        {
          type: "history",
          ...params,
        }
      );
      dispatch(slice.actions.setJobHistory(response?.data?.view_data));
    } catch (error) {
      dispatch(slice.actions.hasJobHistoryError(error));
    }
  };
};
