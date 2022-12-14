import {
    CREATE_TASK,
    RETRIEVE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
  } from "../actions/types";
  const initialState = [];
  function taskReducer(task = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_TASK:
        return [...task, payload];
      case RETRIEVE_TASK:
        return payload;
      case UPDATE_TASK:
        return task.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              ...payload,
            };
          } else {
            return task;
          }
        });
      case DELETE_TASK:
        return task.filter(({ id }) => id !== payload.id);
    //   case DELETE_ALL_TUTORIALS:
    //     return [];
      default:
        return task;
    }
  };
  export default taskReducer;