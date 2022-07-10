import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
const initialState = {
  mealData: [],
};
const url = "http://localhost:8080";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getMeal() {
    const res = await axios.get(`${url}/api/meal`);
    dispatch({
      type: "GET_MEAL",
      payload: res.data,
    });
  }

  async function addMeal(meal) {
    const res = await axios.post(`${url}/api/meal`, meal);
    dispatch({
      type: "ADD_MEAL",
      payload: res.data,
    });
  }

  async function deleteMeal(id) {
    await axios.delete(`${url}/api/meal/${id}`);
    dispatch({
      type: "DELETE_MEAL",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        mealData: state.mealData,
        getMeal,
        deleteMeal,
        addMeal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
