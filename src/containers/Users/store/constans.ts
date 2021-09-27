import { createActionTypes } from "@utils/";

export const ACTION_TYPES = ["FETCH_USER", "FETCH_USERS", "ADD_USER", "EDIT_USER", "REMOVE_USER", "FILTER_SETTINGS"];
export const usersActionTypes = createActionTypes(ACTION_TYPES);
