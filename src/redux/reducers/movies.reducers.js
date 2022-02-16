import { ActionTypes } from '../constanst/action.types';
const initialSate = {
    movies: []
}
export const moviesReducer=(state=initialSate,{type,payload})=>
{
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return {...state,...payload}
    
        default:
            return state;
    }
}
export const selectedMoviesReducer=(state={},{type,payload})=>
{
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_MOVIE:
            return {};
        default:
            return state;
    }
}