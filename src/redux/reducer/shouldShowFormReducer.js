 export default function shouldShowFormReduce(state = false, action) {
  if(action.type ==='TOGGLE_FORM'){
    return !state;
  }
  return state;
}