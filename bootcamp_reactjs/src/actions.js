// File Actions.js 
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"



export const increment = () => {
    return {
      type: INCREMENT,  // Action untuk menambah angka
    };
  };
  
  export const decrement = () => {
    return {
      type: DECREMENT,  // Action untuk mengurangi angka
    };
  };
  
  // Action creator untuk mereset nilai
export const reset = () => {
  return {
    type: RESET,
  };
};