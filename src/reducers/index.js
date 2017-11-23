// reducer 를 1개로 설정하는 경우
// 
// import * as types from '../actions/ActionTypes';

// const initialState = {
//   number: 0,
//   color: 'black'
// };

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1
//       }
//     case types.DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1
//       }
//     case types.SET_COLOR:
//       return {
//         ...state,
//         color: action.color
//       }
//     default:
//       return state;
//   }
// }
// export default counter;


// reducer 를 2개로 나누는 경우 -> combineReducers 를 사용하여 처리 
// 데이터구조 - 아래 예시 참조 
// {
//   number_data: {
//     number: 0
//   }
// }

import color from './color';
import number from './number';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  number_data: number,
  color_data: color
})


export default reducers;