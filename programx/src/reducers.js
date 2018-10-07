import React from 'react';
import Exercises from './Containers/Exercises/Exercises.js';
import Problem from './Containers/Problem/Problem.js';
import News from './Containers/News/News.js';

//constants that define the type of action that was triggered .

import {START_PROBLEM_PAGE ,
        START_EXERCISES_PAGE,
        START_NEWS_PAGE,
        REQUEST_EXERCISES_PENDING,
        REQUEST_EXERCISES_SUCCES,
        REQUEST_EXERCISES_FAILED,
        RQUEST_NEWS_PENDING,
        RQUEST_NEWS_SUCCES,
        RQUEST_NEWS_FAILED,
        RQUEST_PROBLEM_PENDING,
        RQUEST_PROBLEM_SUCCES,
        RQUEST_PROBLEM_FAILED,
      } from './constants.js';

// default state when the page starts

const initialStatePage = {
  page: <Exercises />,
}

// change page state depending on the action.

export const changePage = (state = initialStatePage, action = {}) => {
  switch (action.type) {
    case START_PROBLEM_PAGE:
      return Object.assign({}, state, {page: action.payload});
      break;
    case START_EXERCISES_PAGE:
      return Object.assign({}, state, {page: action.payload});
      break;
    case START_NEWS_PAGE:
      return Object.assign({}, state, {page: action.payload});
      break;
    default:
      return state;
  }
}

// default state of the list of exercises.

const initialStateExercises = {
  isPending: false,
  exercises: [],
  error: ''
}

//handle the request of getting the list of exercises.

export const requestExercises = (state = initialStateExercises, action = {}) => {
  switch (action.type) {
    case REQUEST_EXERCISES_PENDING:
      return Object.assign({}, state, {isPending: true});
      break;
    case REQUEST_EXERCISES_SUCCES:
      return Object.assign({}, state, {isPending: false, exercises: action.payload});
      break;
    case REQUEST_EXERCISES_FAILED:
      return Object.assign({}, state, {isPending: false, error: action.payload});
      break;
    default:
      return state;
  }
}

// initial state for the news page

const initialStateNews = {
  isPending: false,
  news: [],
  error: ''
}

//handle the request of getting the list of news

export const requestNews = (state = initialStateNews, action = {}) => {
  switch (action.type) {
    case RQUEST_NEWS_PENDING:
      return Object.assign({}, state, {isPending: true});
      break;
    case RQUEST_NEWS_SUCCES:
      return Object.assign({}, state, {isPending: false, news: action.payload});
      break;
    case RQUEST_NEWS_FAILED:
      return Object.assign({}, state, {isPending: false, error: action.payload});
      break;
    default:
      return state;
  }
}

// initial state for problemH

const initialStateProblem = {
  isPending: false,
  problem: [],
  error: ''
}

//handle the request of getting a problem

export const requestProblem = (state = initialStateProblem, action = {}) => {
  switch (action.type) {
    case RQUEST_PROBLEM_PENDING:
      return Object.assign({}, state, {isPending: true});
      break;
    case RQUEST_PROBLEM_SUCCES:
      return Object.assign({}, state, {isPending: false, problem: action.payload});
      break;
    case RQUEST_PROBLEM_FAILED:
      return Object.assign({}, state, {isPending: false, error: action.payload});
      break;
    default:
      return state;
  }
}
