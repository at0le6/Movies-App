import {combineReducers} from 'redux'
import {moviesReducer,selectedMoviesReducer} from './movies.reducers'

const reducer=combineReducers({
    Allmovies:moviesReducer,
    SelectedMovie:selectedMoviesReducer,
})
export default reducer;