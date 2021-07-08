// import { Object } from "core-js";

export function manageFriends(state = initialState, action) {
  console.log("state:",state)
  console.log("action:",action)
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, state.friends.push(action.friend))
    case 'REMOVE_FRIEND':
      return Object.assign({}, state, { friends: state.friends.filter(friend => friend.id !== action.id) })
    default:
      return state
  }
}
