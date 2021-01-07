import {
  FETCHING_PROJECTS_START,
  FETCHING_PROJECTS_SUCCESS,
  FETCHING_PROJECTS_FAIL,
} from "../actions";

const initialState = {
  isLoading: false,
  errorText: "",
  projects: [],
  role: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PROJECTS_START:
      return { ...state, isLoading: true };
    case FETCHING_PROJECTS_SUCCESS:
      return { ...state, isLoading: false, projects: action.payload };
    case FETCHING_PROJECTS_FAIL:
      return { ...state, isLoading: false, errorText: action.payload };
    default:
      return state;
  }
};

export default reducer;
