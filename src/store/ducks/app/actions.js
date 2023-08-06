import { createAction } from 'redux-actions';
import * as constants from './constants';

// Login
export const loginIdle = createAction(constants.LOGIN_IDLE);
export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginFailure = createAction(constants.LOGIN_FAILURE);

export const signUpIdle = createAction(constants.SIGNUP_IDLE);
export const signUpRequest = createAction(constants.SIGNUP_REQUEST);
export const signUpSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signUpFailure = createAction(constants.SIGNUP_FAILURE);

export const getAllTournamentsIdle = createAction(constants.GET_ALL_TOURNAMENTS_IDLE);
export const getAllTournamentsRequest = createAction(constants.GET_ALL_TOURNAMENTS_REQUEST);
export const getAllTournamentsSuccess = createAction(constants.GET_ALL_TOURNAMENTS_SUCCESS);
export const getAllTournamentsFailure = createAction(constants.GET_ALL_TOURNAMENTS_FAILURE);

export const getUpcomingMatchesIdle = createAction(constants.UPCOMING_MATCHES_IDLE);
export const getUpcomingMatchesRequest = createAction(constants.UPCOMING_MATCHES_REQUEST);
export const getUpcomingMatchesSuccess = createAction(constants.UPCOMING_MATCHES_SUCCESS);
export const getUpcomingMatchesFailure = createAction(constants.UPCOMING_MATCHES_FAILURE);

