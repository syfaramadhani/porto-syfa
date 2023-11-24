
function listenNow(event) {
  event.preventDefault();

  const playlistId = event.target.dataset.playlistId;
  const url = `https://open.spotify.com/playlist/${playlistId}`;

  window.location.href = url;
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", listenNow);
});
