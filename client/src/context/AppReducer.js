export default (state, actions) => {
  switch (actions.type) {
    case "GET_MEAL":
      return {
        ...state,
        mealData: actions.payload,
      };
    case "ADD_MEAL":
      return {
        ...state,
        mealData: [...state.mealData, actions.payload],
      };
    case "DELETE_MEAL":
      return {
        ...state,
        mealData: state.mealData.filter((meal) => meal._id !== actions.payload),
      };
    case "SET_USER":
      return {
        ...state,
        userName: actions.payload,
      };
    default:
      return state;
  }
};
