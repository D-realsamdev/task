import {
    CREATE_TASK,
    RETRIEVE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
  } from "./types";
  import TaskDataService from "../services/task.service";
  
  export const createTask = ( description, date, time, assignuser) => async (dispatch) => {
    try {
      const res = await TaskDataService.create('company_413ef22b6237417fb1fba7917f0f69e7');
      dispatch({
        type: CREATE_TASK,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveTask = () => async (dispatch) => {
    try {
      const res = await TaskDataService.getAll();
      dispatch({
        type: RETRIEVE_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updateTask = (id, data) => async (dispatch) => {
    try {
      const res = await TaskDataService.update(id, data);
      dispatch({
        type: UPDATE_TASK,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteTask = (id) => async (dispatch) => {
    try {
      await TaskDataService.delete(id);
      dispatch({
        type: DELETE_TASK,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
//   export const deleteAllTutorials = () => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.deleteAll();
//       dispatch({
//         type: DELETE_ALL_TUTORIALS,
//         payload: res.data,
//       });
//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };
//   export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.findByTitle(title);
//       dispatch({
//         type: RETRIEVE_TUTORIALS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };