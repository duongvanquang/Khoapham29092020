import actionType from './actionTypes';

function setFilterMode(filterMode) {
  return { type: actionType.ACTION_TYPE_SET_FILTER_MODE, filterMode }
}
function toggleWord(id) {
  return { type: actionType.ACTION_TYPE_TOGGLE_WORD, id }
}
function removeWord (id){
  return {type :actionType.ACTION_TYPE_REMOVE_WORD,id }
}
function toggleForm (){
  return {type:actionType.ACTION_TYPE_TOGGLE_FORM}
}
function addWord (word){
  return {type:actionType.ACTION_TYPE_ADD_WORD,word}
}
export default {
  setFilterMode,
  toggleWord,
  removeWord,
  toggleForm,
  addWord
}