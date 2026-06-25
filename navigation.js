//change the src for the ifram on the ipod screen
function navigate(page) {
    document.getElementById('ipod-screen').src = page;
}

function toggleFullscreen() {
  const iframe = document.getElementById('ipod-screen');
  const currentSrc = iframe.getAttribute('src');

  if (currentSrc === 'home.html') {
    return;
  }

  window.location.href = currentSrc;
}
