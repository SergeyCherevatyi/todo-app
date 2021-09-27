import { takeLatest, call, put, select } from "@redux-saga/core/effects";
import { usersActionTypes } from "./constans";
import { usersActions } from "./actions";
import * as axios from "axios";

function* fetchUsersSaga({ cb }: ReturnType<any>) {
  try {
    // BE REQUEST
    // const filters = select((state) => { 2 вариант
    //   state.userReducer.filterSettings
    // })

    const users = [
      {
        id: 1,
        firstName: "Serhii",
        lastName: "Cher",
        isActive: true,
        cratedAt: new Date(),
        avatar: "./users/avatar/1",
      },
      {
        id: 2,
        firstName: "Sasha",
        lastName: "Ivanov",
        isActive: false,
        cratedAt: new Date(),
        avatar: "./users/avatar/2",
      },
    ];

    yield put(usersActions.FETCH_USERS.SUCCESS(users));
  } catch (error) {
    yield put(usersActions.FETCH_USERS.FAILURE(error as Object));
  } finally {
    cb?.();
  }
}

function* fetchUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    // BE REQUEST

    const user1 = {
      id: 3,
      firstName: "Serg",
      lastName: "Cherev",
      isActive: true,
      cratedAt: new Date(),
      avatar: "./users/avatar/1",
    };

    yield put(usersActions.FETCH_USER.SUCCESS(user1));
  } catch (error) {
    yield put(usersActions.FETCH_USER.FAILURE(error as Object));
  } finally {
    cb?.();
  }
}

function* addUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    // const data = yield call(axios.post(`/todos`, payload))
    const userNew = {
      id: 4,
      firstName: "test",
      lastName: "Test",
      isActive: true,
      cratedAt: new Date(),
      avatar: "./users/avatar/6",
    };

    yield put(usersActions.ADD_USER.SUCCESS(userNew));
  } catch (err) {
    yield put(usersActions.ADD_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    // const { id, ...rest } = payload
    // const data = yield call(axios.put(`/todos/${id}`, rest))
    const editUser = {
      id: 4,
      firstName: "testEdit",
      lastName: "Test",
      isActive: true,
      cratedAt: new Date(),
      avatar: "./users/avatar/6",
    };
    yield put(usersActions.EDIT_USER.SUCCESS(editUser));
  } catch (err) {
    yield put(usersActions.EDIT_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeUserSaga({ payload, cb }: ReturnType<any>) {
  try {
    // const data = yield call(axios.delete(`/todos/${payload.id}`))
    const removeUserId = 5;
    yield put(usersActions.REMOVE_USER.SUCCESS(removeUserId));
  } catch (err) {
    yield put(usersActions.REMOVE_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const usersWatcherSaga = function* () {
  yield takeLatest(usersActionTypes.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(usersActionTypes.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(usersActionTypes.ADD_USER.REQUEST, addUserSaga);
  yield takeLatest(usersActionTypes.EDIT_USERS.REQUEST, editUserSaga);
  yield takeLatest(usersActionTypes.REMOVE_USERS.REQUEST, removeUserSaga);
};
