import { combineReducers } from 'redux'
import { moviesReducer, selectedMoviesReducer, infoPeopleReducer, infoShowReducer } from './movies.reducers'

const reducer = combineReducers({
    Allmovies: moviesReducer,
    SelectedMovie: selectedMoviesReducer,
    infoPeople: infoPeopleReducer,
    infoShow: infoShowReducer,
})
export default reducer;