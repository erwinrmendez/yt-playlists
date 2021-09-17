/* global gapi */

// Get playlists
function getPlaylists() {
  const result = gapi.client.youtube.playlists
    .list({
      part: ["snippet,contentDetails"],
      maxResults: 100,
      mine: true,
    })
    .then((response) => {
      const { items } = response.result;
      return items;
    })
    .catch((err) => {
      console.log("Error retrieving playlists.", err);
    });

  return result;
}

// Get all videos in playlist by ID
function getVideos(playlistId) {}

// Export functions and properties
export { getPlaylists, getVideos };
