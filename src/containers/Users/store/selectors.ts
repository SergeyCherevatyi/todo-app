import { Filters } from "@containers/*";
import { createSelector } from "reselect";
import { IUserState } from "./interfaces";

interface IAppState {
  users: IUserState;
}

const selectUsers = (state: IUserState) => state.users; // state from APP Reducer
const selectFilters = (state: IUserState) => state.filterSettings; // state from APP Reducer

export const getUsers = () => createSelector(selectUsers, (state) => state.users); // state from APP Reducer
export const getUser = () => createSelector(selectUsers, (state) => state.user); // state from APP Reducer
export const getFilterSetings = () => createSelector(selectFilters, (state) => state.filterSettings);

export const getFilteredUsers = () =>
  createSelector([selectUsers, selectFilters], (state, filter) => {
    const { search } = filter;

    return state.users.filter((todo) => Object.values(todo).some((t) => t.includes(search)));
  });
