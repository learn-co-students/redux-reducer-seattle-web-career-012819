export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND': 
      const moreFriends = [...state.friends, action.friend]
      return {...state, friends: moreFriends }
    case 'REMOVE_FRIEND':
      const filteredFriends = state.friends.slice().filter(f => f.id !== action.id)
      return {...state, friends: filteredFriends }
    default: 
      return state
  }

}
