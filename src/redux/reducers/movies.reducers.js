import { ActionTypes } from '../constanst/action.types';
const initialSate = {
    movies: []
}
const infoShowInitialState = {
    main: [],
    episodes: [],
    season: [],
    cast: [],
    crew: [],
    gallery: []
}
const infoPeopleInitialState = {
    mainPeople: []
}
export const moviesReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return {...state, ...payload }
        case ActionTypes.deSelectMovie:
            return initialSate;

        default:
            return state;
    }
}
export const infoShowReducer = (state = infoShowInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_SHOW_INFO:
            return {...state, ...payload }
        case ActionTypes.REMOVE_SHOW_INFO:
            return infoShowInitialState;
        default:
            return state;
    }
}
export const infoPeopleReducer = (state = infoPeopleInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PEOPLE_INFO:
            return {...state, ...payload }
        case ActionTypes.REMOVE_PEOPLE_INFO:
            return infoPeopleInitialState;

        default:
            return state;
    }
}
export const selectedMoviesReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_MOVIE:
            return {};
        default:
            return state;
    }
}