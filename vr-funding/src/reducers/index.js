import {
  FETCHING_PROJECTS_START,
  FETCHING_PROJECTS_SUCCESS,
  FETCHING_PROJECTS_FAIL,
  SET_ROLE,
  SET_ID,
  SET_EDITING,
  FETCH_USER_PROJECTS_START,
  FETCH_USER_PROJECTS_SUCCESS,
  FETCH_USER_PROJECTS_FAIL,
} from "../actions";

const initialState = {
  isLoading: false,
  errorText: null,
  projects: [],
  userProjects: [],
  role: "",
  id: "",
  editedProject: {
    amount_raised: "",
    funding_amount: "",
    mission_statement: "",
    owner_id: "",
    project_description: "",
    project_id: "",
    project_timeline: "",
    project_title: "",
    project_type: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PROJECTS_START:
      return { ...state, isLoading: true };
    case FETCHING_PROJECTS_SUCCESS:
      return { ...state, isLoading: false, projects: action.payload };
    case FETCHING_PROJECTS_FAIL:
      return { ...state, isLoading: false, errorText: action.payload };
    case SET_ROLE:
      return { ...state, role: action.payload };
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_EDITING:
      return { ...state, editedProject: action.payload };
    case FETCH_USER_PROJECTS_START:
      return { ...state, isLoading: true };
    case FETCH_USER_PROJECTS_SUCCESS:
      return { ...state, isLoading: false, userProjects: action.payload };
    case FETCH_USER_PROJECTS_FAIL:
      return { ...state, isLoading: false, errorText: action.payload };
    default:
      return state;
  }
};

export default reducer;
