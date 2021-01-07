import {
  FETCHING_PROJECTS_START,
  FETCHING_PROJECTS_SUCCESS,
  FETCHING_PROJECTS_FAIL,
  SET_ROLE,
  SET_EDITING,
} from "../actions";

const initialState = {
  isLoading: false,
  errorText: "",
  projects: [],
  role: "",
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
    case SET_EDITING:
      return { ...state, editedProject: action.payload };
    default:
      return state;
  }
};

export default reducer;
