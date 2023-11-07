const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "52dc926e809d4e438b92951d3785d9e3";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-privated"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("420")}&response_type=token&show_dilog=ture`;