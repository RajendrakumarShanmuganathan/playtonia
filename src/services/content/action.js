import actionType from './actionType';
import axios from "axios";

export const contentGetAction = payload => dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch({
          type: actionType.CONTENT_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionType.CONTENT_FAILURE,
        });
      });
  };