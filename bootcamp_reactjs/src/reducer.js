// store.js (JavaScript)
import { createStore } from 'redux';
import { INCREMENT, DECREMENT, RESET } from './actions';


// Initial state
const initialState = {
  count: 0,  // Nilai awal count adalah 0
};

// Reducer (fungsi yang menangani perubahan state berdasarkan action)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,  // Tambah count 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,  // Kurangi count 1
      };
    case RESET:  // Menambahkan case untuk action reset
      return {
        ...state,
        count: 0,
      };

    default:
      return state;  // Jika action tidak dikenali, kembalikan state yang ada
  }
};


export default counterReducer;
