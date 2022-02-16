import {ActionTypes} from '../constanst/action.types';
export const setMovie=(movies)=>
{
    return {
        type:ActionTypes.SET_MOVIES,
        payload:movies,
    }
}
export const setSelectedMovie=(movie)=>
{
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload:movie,
    }
}
export const removeSelectedMovie=()=>
{
    return{
        type: ActionTypes.REMOVE_SELECTED_MOVIE,
    }
}
