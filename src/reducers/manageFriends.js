export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
        return (
            {...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]
            }
            )
            case "REMOVE_FRIEND":
            console.log(state)
            console.log(action)
            //copied from solution. I get "removalIndex", but I do not understand why "...state.freinds.slice" is called twice
            const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
            return (
            {...state,
                friends: [
                    ...state.friends.slice(0, removalIndex),
                    ...state.friends.slice(removalIndex + 1)
                ]
            }
            )        
            default:
            return state
            
        }

}
