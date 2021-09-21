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
      let playlists = [];

      items.forEach((item) => {
        playlists.push({ id: item.id, title: item.snippet.title });
      });

      // save to local storage
      localStorage.setItem("playlists", JSON.stringify(playlists));

      // return value
      return playlists;
    })
    .catch((err) => {
      console.log("Error retrieving playlists.", err);
      return [];
    });

  return result;
}

// Get all videos in playlist by ID
function getVideos(playlistId) {
  const result = gapi.client.youtube.playlistItems
    .list({
      part: ["snippet,contentDetails"],
      maxResults: 100,
      playlistId,
    })
    .then((response) => {
      const { items } = response.result;
      let videos = [];

      items.forEach((item) => {
        videos.push({
          id: item.contentDetails.videoId,
          title: item.snippet.title,
          channel: item.snippet.videoOwnerChannelTitle,
          thumbnail: item.snippet.thumbnails.default,
          get url() {
            return "https://www.youtube.com/watch?v=" + this.id;
          },
        });
      });

      // save to local storage
      localStorage.setItem("videos", JSON.stringify({ playlistId, videos }));

      // // return value
      return videos;
    })
    .catch((err) => {
      console.log("Error retrieving videos.", err);
      return [];
    });

  return result;
}

// Export functions and properties
export { getPlaylists, getVideos };
