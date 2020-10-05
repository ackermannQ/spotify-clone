export const initialState = { 
  user: null,
  playlists: [],
  isPlaying: false,
  item: null, // REMOVE THE TOKEN WHEN DEPLOYING
  // token: 'BQD7ET43gOw1cyMVEvU5yQ1pg3x3cvO6nqUR1eyUlf6nMhpEeCVOkfsX58a4XAMGvtzwqU4EHMjJSDbRltKJCXjeMYRB1Uq1DbYBs-4-ZMNMIYbcTSj6OaEIII4sWraDe3lDXKCUZ_JBYyvOWZZZfE_n_WuZPGg0'
 };

 const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user
        };
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token
        };
      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists
        };
      default:
        return state;
    };
 }

 export default reducer;