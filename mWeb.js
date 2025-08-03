(function () {
    'use strict';
    // Your code here...
    if (window.location.href.includes('m.youtube')) {
        window.location.assign('?app=desktop&persist_app=1');
    }
   
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

            if (document.getElementById('search-button-narrow')) {
                document.getElementById('search-button-narrow').style.display = 'none';
                clearInterval(interval);
            }

            // hamburger
            if (document.getElementById('guide-button')) {
                document.getElementById('guide-button').style.display = 'none';
                clearInterval(interval);
            }

            if (document.querySelector('a[href="/upload"]')) {
                document.querySelector('a[href="/upload"]').style.display = 'none';
                clearInterval(interval);
            }
          
            if (document.getElementById('secondary-inner') && window.location.href.includes("/watch")) {
                document.getElementById('secondary-inner').style.display = 'none';
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

    blockHomeRecommendations();

    // adding notifications icon
    document.querySelector('ytd-notification-topbar-button-renderer').style.display = 'block';


    new MutationObserver(function (mutations) {
        blockHomeRecommendations();
    }).observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    );
})();



