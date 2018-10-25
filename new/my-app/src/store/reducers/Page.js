const initial = {
    year: 2018,
    photos: []
}

export function pageReducer (state = initial, action){
    switch(action.type){
        case 'SET_YEAR': return {...state, year: action.payload }
        
        default: return state
    }
    
}