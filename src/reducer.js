export const initialState = { 
    user: null,
    playlists: [],
    isPlaying: false,
    item: null
 };

 const reducer = (state, action) => {
     console.log(action);
 }

 export default reducer;