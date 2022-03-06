import { ActionTypes } from '../constanst/action.types';
export const setMovie = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies,
    }
}
export const deSelectMovie = () => {
    return {
        type: ActionTypes.deSelectMovie,
    }
}
export const setShowInfo = (show) => {
    return {
        type: ActionTypes.SELECTED_SHOW_INFO,
        payload: show,
    }
}
export const deSelectShowInfo = () => {
    return {
        type: ActionTypes.REMOVE_SHOW_INFO,
    }
}
export const setPeopleInfo = (people) => {
    return {
        type: ActionTypes.SELECTED_PEOPLE_INFO,
        payload: people,
    }
}
export const deSelectPeopleInfo = () => {
    return {
        type: ActionTypes.REMOVE_PEOPLE_INFO,
    }
}
export const setSelectedMovie = (movie) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie,
    }
}
export const removeSelectedMovie = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_MOVIE,
    }
}