import { combineReducers, createStore } from 'redux';

import tournamentTableReducer from './reducers/tournamentTableReducer';

let reducers = combineReducers({
    tournamentTableReducer: tournamentTableReducer,

});
export const store = createStore(reducers);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;