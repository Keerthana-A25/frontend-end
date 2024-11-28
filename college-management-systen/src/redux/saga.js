import { all, put, takeLatest, call } from 'redux-saga/effects';
import {APP_TYPE} from "./type";
import axios from 'axios';
import {msNetwork}   from "./network";


export function* getLoggedUser(action) {
    try {
        const {reg_emp_id, password} = action?.userData;
        const response = yield call(axios.get, `http://3.86.242.149:8000/api/users/?reg_emp_id=${reg_emp_id}&password=${password}`);
        if(response){
            yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: response?.data});
        } else {
            yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: "Invalid User"});
        }
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('API Error:', error.response);
        } else if (error.request) {
            // No response received (likely a CORS issue)
            console.error('CORS Error:', error.message);
        } else {
            // Other error (e.g., network issues)
            console.error('Error:', error.message);
        }
        yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: null});
    }
    // try {
    //     yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: null});
    //  const response =   yield call(msNetwork.getLoggedUser, action?.userData);
    //  console.log("Error response >>>>>>>>", response);
    //  if(response){
    //      yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: response});
    //  } else {
    //      yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: "Invalid User"});
    //  }
    //
    // } catch (e) {
    //     console.log('Catch error >>>>>>', e);
    //     yield put({type: APP_TYPE.GET_LOGGED_USER_SUCCESS, payload: null});
    //
    // }
}
export function* appSaga() {
    yield all([
       takeLatest(APP_TYPE.GET_LOGGED_USER, getLoggedUser)
    ])
}
