import { spawn, takeEvery } from "redux-saga/effects";
import { pending, rejected, fulfilled } from "./index";

export function* masterSaga() {
  console.log("MASTER SAGA");
}

export function* masterSagaWatcher() {
  try {
    yield takeEvery(pending.type, masterSaga);
  } catch (e) {
    // throw e
  }
}

export default function* rootSaga() {
  try {
    yield spawn(masterSagaWatcher);
  } catch (e) {
    console.error(e);
  }
}
