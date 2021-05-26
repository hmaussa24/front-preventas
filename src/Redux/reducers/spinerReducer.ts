import {SpinerAction } from "../actions/index";
import { ActionTypes } from "../action-types/index";

const initialState: boolean = false;

const spiner = (state: boolean = initialState, action: SpinerAction) => {
  switch (action.type) {
      case ActionTypes.SPINER:
          return (state = action.payload);
  }
  return state;

};

export default spiner;
