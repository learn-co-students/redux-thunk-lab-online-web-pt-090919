// add the catsReducer
const initialState = {
     cats: [],
     loading: false
}

export default function catsReducer(state = initialState, action) {
     switch (action.type) {
          case 'LOADING_CATS':
               return {
                    ...state,
                    cats: [...state.cats],
                    loading: true
               }
          case 'ADD_CATS':
               return {
                    ...state,
                    cats: action.cats,
                    loading: false
               }
          default:
               return state;
     }
}