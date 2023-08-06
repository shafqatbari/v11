import { takeLatest, put } from "redux-saga/effects";
import { PostApiCall, GetApiCall, PutApiCall } from "../../../lib/ApiCalls";
import * as actions from './actions';
import * as constants from './constants';
import {
    API_MatchApi_GetUpcomingMatches,
    API_TournamentApi_getAllTournaments,
    Auth_Login, UserApi_RegisterUser,
} from "../../../lib/endPoints";

/* fetch Login */
function* loginRequest(req) {
    console.log('>>>> loginRequest  ', req);
    try {
        var response = yield PostApiCall(Auth_Login, req.payload);

        console.log('>>>> response  ', response);
        if (response.isSuccess) {
            yield put(actions.loginSuccess({ data: response.data }));
        } else {
            yield put(actions.loginFailure({ message: response.message }));
        }
    } catch (error) {
        yield put(actions.loginFailure({ message: error.message }));
    }
}

function* signUpRequest(req) {
    console.log('>>>> signUpRequest  ', req);
    try {
        var response = yield PostApiCall(UserApi_RegisterUser, req.payload);

        console.log('>>>> response  ', response);
        if (response.isSuccess) {
            yield put(actions.signUpSuccess({ data: response.data }));
        } else {
            yield put(actions.signUpFailure({ message: response.message }));
        }
    } catch (error) {
        yield put(actions.signUpFailure({ message: error.message }));
    }
}

function* getAllTournamentsRequest(req) {
    try {
        var response = yield GetApiCall(API_TournamentApi_getAllTournaments, req.payload);

        // console.log('>>>> response getAllTournamentsRequest  ', response);
        if (response.isSuccess) {
            yield put(actions.getAllTournamentsSuccess({ data: response.data }));
        } else {
            yield put(actions.getAllTournamentsFailure({ message: response.message }));
        }
    } catch (error) {
        yield put(actions.getAllTournamentsFailure({ message: error.message }));
    }
}

function* getUpcomingMatchesRequest(req) {
    try {
        var response = yield GetApiCall(API_MatchApi_GetUpcomingMatches, req.payload);

        // console.log('>>>> response getUpcomingMatchesRequest  ', response);
        if (response.isSuccess) {
            yield put(actions.getUpcomingMatchesSuccess({ data: response.data }));
        } else {
            yield put(actions.getUpcomingMatchesFailure({ message: response.message }));
        }
    } catch (error) {
        yield put(actions.getUpcomingMatchesFailure({ message: error.message }));
    }
}


export default () => [
    takeLatest(constants.LOGIN_REQUEST, loginRequest),
    takeLatest(constants.SIGNUP_REQUEST, signUpRequest),
    takeLatest(constants.GET_ALL_TOURNAMENTS_REQUEST, getAllTournamentsRequest),
    takeLatest(constants.UPCOMING_MATCHES_REQUEST, getUpcomingMatchesRequest),

];