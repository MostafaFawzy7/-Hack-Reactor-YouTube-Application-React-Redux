import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import data from './../data/exampleVideoData.js';

const initialState = {
  currentVideo: data[0],
  videoList: data,
  searchValue: null,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;