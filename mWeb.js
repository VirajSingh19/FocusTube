function blockHomeRecommendations() {
    console.log('blocking');
    
   

    
    setTimeout(() => {
        document.querySelectorAll('.rich-grid-renderer-contents').length &&
        (document.querySelectorAll('.rich-grid-renderer-contents')[0].style.display = 'none')
    }, 1e3)


}

blockHomeRecommendations();

new MutationObserver(function (mutations) {
    console.log('url changed');
    blockHomeRecommendations();
}).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
);