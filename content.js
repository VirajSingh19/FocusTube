 function blockHomeRecommendations() {
        let retryCount = 0;
        const interval = setInterval(() => {
            if (document.getElementById('contents')) {
                document.getElementById('contents').style.display = 'none';
                clearInterval(interval);
            } 
            
            if (document.querySelector("[role='tablist']")) {
                document.querySelector("[role='tablist']").style.display = 'none';
                clearInterval(interval);
            }

            if (document.getElementById('secondary-inner') && window.location.href.includes("/watch")) {
                document.getElementById('secondary-inner').style.display = 'none';
                console.log('blocked lazy list1')
                clearInterval(interval);
            }

            if (window.location.href.includes('/shorts')) {
                // no shorts
                history.back();
            }

            else {
                ++retryCount;
            }

            if (retryCount > 50) {
                clearInterval(interval);
            }
        }, 100)
    }

function init() {
  blockHomeRecommendations();
  new MutationObserver(function (mutations) {
    blockHomeRecommendations();
  }).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
  );
}


if (window.location.href.includes('youtube')) {
  init();
}

