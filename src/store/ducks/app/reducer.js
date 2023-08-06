import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from './constants';

const initialState = {
    login: {
        data: [],
        status: 'idle',
        message: {},
        payload: {}
    },
    signUp: {
        data: [],
        status: 'idle',
        message: {},
        payload: {}
    },
    getAllTournaments: {
        data: [],
        status: 'idle',
        message: {},
        payload: {}
    },
    getUpcomingMatches: {
        data: [],
        status: 'idle',
        message: {},
        payload: {}
    },


};



//Login

const loginRequest = (state, action) => update(state, {
    login: {
        status: { $set: 'loading' },
        payload: { $set: action.payload }
    }
});

const loginSuccess = (state, action) => update(state, {
    login: {
        message: { $set: action.payload.message },
        data: { $set: action.payload.data },
        status: { $set: 'success' },
    }
});

const loginFailure = (state, action) => update(state, {
    login: {
        message: { $set: action.payload.message },
        status: { $set: 'failure' },
    }
});

const loginIdle = state => update(state, {
    login: {
        data: { $set: initialState.login.data },
        status: { $set: 'idle' },
    }
});

//Sign Up

const signUpRequest = (state, action) => update(state, {
    signUp: {
        status: { $set: 'loading' },
        payload: { $set: action.payload }
    }
});

const signUpSuccess = (state, action) => update(state, {
    signUp: {
        message: { $set: action.payload.message },
        data: { $set: action.payload.data },
        status: { $set: 'success' },
    }
});

const signUpFailure = (state, action) => update(state, {
    signUp: {
        message: { $set: action.payload.message },
        status: { $set: 'failure' },
    }
});

const signUpIdle = state => update(state, {
    signUp: {
        data: { $set: initialState.signUp.data },
        status: { $set: 'idle' },
    }
});

//Sign Up

const getAllTournamentsRequest = (state, action) => update(state, {
    getAllTournaments: {
        status: { $set: 'loading' },
        payload: { $set: action.payload }
    }
});

const getAllTournamentsSuccess = (state, action) => update(state, {
    getAllTournaments: {
        message: { $set: action.payload.message },
        data: { $set: action.payload.data },
        status: { $set: 'success' },
    }
});

const getAllTournamentsFailure = (state, action) => update(state, {
    getAllTournaments: {
        message: { $set: action.payload.message },
        status: { $set: 'failure' },
    }
});

const getAllTournamentsIdle = state => update(state, {
    getAllTournaments: {
        data: { $set: initialState.getAllTournaments.data },
        status: { $set: 'idle' },
    }
});
//Sign Up

const getUpcomingMatchesRequest = (state, action) => update(state, {
    getUpcomingMatches: {
        status: { $set: 'loading' },
        payload: { $set: action.payload }
    }
});

const getUpcomingMatchesSuccess = (state, action) => update(state, {
    getUpcomingMatches: {
        message: { $set: action.payload.message },
        data: { $set: action.payload.data },
        status: { $set: 'success' },
    }
});

const getUpcomingMatchesFailure = (state, action) => update(state, {
    getUpcomingMatches: {
        message: { $set: action.payload.message },
        status: { $set: 'failure' },
    }
});

const getUpcomingMatchesIdle = state => update(state, {
    getUpcomingMatches: {
        data: { $set: initialState.getUpcomingMatches.data },
        status: { $set: 'idle' },
    }
});


// Handle Actions

export default handleActions({

    [constants.LOGIN_REQUEST]: loginRequest,
    [constants.LOGIN_SUCCESS]: loginSuccess,
    [constants.LOGIN_FAILURE]: loginFailure,
    [constants.LOGIN_IDLE]: loginIdle,

    [constants.SIGNUP_REQUEST]: signUpRequest,
    [constants.SIGNUP_SUCCESS]: signUpSuccess,
    [constants.SIGNUP_FAILURE]: signUpFailure,
    [constants.SIGNUP_IDLE]: signUpIdle,

    [constants.GET_ALL_TOURNAMENTS_REQUEST]: getAllTournamentsRequest,
    [constants.GET_ALL_TOURNAMENTS_SUCCESS]: getAllTournamentsSuccess,
    [constants.GET_ALL_TOURNAMENTS_FAILURE]: getAllTournamentsFailure,
    [constants.GET_ALL_TOURNAMENTS_IDLE]: getAllTournamentsIdle,

    [constants.UPCOMING_MATCHES_REQUEST]: getUpcomingMatchesRequest,
    [constants.UPCOMING_MATCHES_SUCCESS]: getUpcomingMatchesSuccess,
    [constants.UPCOMING_MATCHES_FAILURE]: getUpcomingMatchesFailure,
    [constants.UPCOMING_MATCHES_IDLE]: getUpcomingMatchesIdle,


}, initialState);