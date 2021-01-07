import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCHING_PROJECTS_START = "FETCHING_PROJECTS_START";
export const FETCHING_PROJECTS_SUCCESS = "FETCHING_PROJECTS_SUCCESS";
export const FETCHING_PROJECTS_FAIL = "FETCHING_PROJECTS_FAIL";

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: FETCHING_PROJECTS_START });
  axiosWithAuth()
    .get("/projects")
    .then((res) => {
      console.log("res: ", res);
      dispatch({ type: FETCHING_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("err: ", err);
      dispatch({ type: FETCHING_PROJECTS_FAIL, payload: err.response });
    });
};
