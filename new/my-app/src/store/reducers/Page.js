import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants'

const initial = {
    year: 2018,
    photos: [],
    isFetching: false
}

export function pageReducer (state = initial, action){
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
          return { ...state, year: action.payload, isFetching: true }
    
        case GET_PHOTOS_SUCCESS:
          return { ...state, photos: action.payload, isFetching: false }
    
        default:
          return state
      }
    
}