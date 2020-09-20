import { spawn, takeEvery, race, put } from "redux-saga/effects";
import { pending, rejected, fulfilled } from "./index";
import getPeopleById from "../services/swapi";

export function* masterSaga() {
  try {
    const { light, dark } = yield race({
      light: getPeopleById(1),
      dark: getPeopleById(4),
    });

    let master = light || dark;

    yield put(fulfilled(master.name));
  } catch (e) {
    yield put(rejected());
  }
}

export function* masterSagaWatcher() {
  try {
    yield takeEvery(pending.type, masterSaga);
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  try {
    yield spawn(masterSagaWatcher);
  } catch (e) {
    console.error(e);
  }
}
