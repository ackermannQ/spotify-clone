import Login from "./components/Login/Login";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "7a43612227d045289eb883e1c7d18d6d";

const redirectUri = "http:%2F%2Flocalhost:3000";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getHashFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
    }, {})
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`;
