(function () {
    'use strict';
    // Your code here...

    function blockHomeRecommendations() {
        let retryCount = 0;
        const interval = setInterval(() => {
            if (document.querySelectorAll('.rich-grid-renderer-contents').length) {
                document.querySelectorAll('.rich-grid-renderer-contents')[0].style.display = 'none';
                clearInterval(interval);
            } 
            
            if (document.querySelector("[role='tablist']")) {
                document.querySelector("[role='tablist']").style.display = 'none';
                clearInterval(interval);
            }

            if (document.querySelector('[section-identifier="related-items"]') && window.location.href.includes("/watch")) {
                document.querySelector('[section-identifier="related-items"]').style.display = 'none';
                clearInterval(interval);
            }

            if (document.querySelector('[aria-label="Search YouTube"]')) {
                document.querySelector('[aria-label="Search YouTube"]').style.display = 'none';
                clearInterval(interval);
            }
            
            if (document.querySelectorAll('lazy-list').length && window.location.href.includes("/watch")) {
                document.querySelectorAll('lazy-list').forEach(n => {n.style.display = 'none'});
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

    new MutationObserver(function (mutations) {
        blockHomeRecommendations();
    }).observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    );
})();



