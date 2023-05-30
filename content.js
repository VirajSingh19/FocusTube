function blockHomeRecommendations() {
 document.getElementById('contents') &&
  (document.getElementById('contents').style.display = 'none')
}

function blockWatchPageRecommendations() {
  document.getElementById('secondary-inner') &&
  (document.getElementById('secondary-inner').style.display = 'none')
}

function blockShorts() {
  [...document.getElementsByClassName('style-scope ytd-reel-shelf-renderer')].forEach(e => {
    e.style.display = 'none'
  })
}

function init() {
  blockHomeRecommendations();
  new MutationObserver(function (mutations) {
    if (window.location.href.includes('youtube') && window.location.href.includes('watch')) {
      blockWatchPageRecommendations();
      setTimeout(() => {
        blockWatchPageRecommendations();
      }, 1e3);
    }
    else if (window.location.href.includes('youtube') && window.location.href.includes('results')) {
      blockShorts();
      setTimeout(() => {
        blockShorts();
      }, 1e3);
    }
  }).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
  );
}


if (window.location.href.includes('youtube')) {
  init();
}

