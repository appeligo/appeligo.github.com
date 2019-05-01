
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    console.log("onYouTubeIframeAPIReady");
    player = new YT.Player('player', {
        'width': '100vw',
        'height': '100vh',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'modestbranding': 1,
            'rel': 0,
            'rec': 0,
            'fs': 0,
            'iv_load_policy': 3,
            'list': 'PLB5odjO0TG0eOudh-hr73gzIOsB6gDwHf',
            'listType': 'playlist',
            'origin': 'https://dirck.ngrok.io',
            'widget_referrer': 'https://dirck.ngrok.io'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log(event);
    //event.target.playVideo();
}

function onPlayerStateChange(event) {
    console.log(event);
}

function stopVideo() {
    player.stopVideo();
}