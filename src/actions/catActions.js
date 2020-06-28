// write and export your action creator function here
export const fetchCats = () => {
     const API_ENDPOINT = 'https://learn-co-curriculum.github.io/cat-api/cats.json'
     return dispatch => {
          dispatch({ type: 'LOADING_CATS' });
          fetch(API_ENDPOINT)
               .then(response => response.json())
               .then(
                    cats => {
                         dispatch({
                              type: 'ADD_CATS',
                              cats: cats.images
                         })
                    }
               )
               .catch(error => console.log(error))
     }
}
