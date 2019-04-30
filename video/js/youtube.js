var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player-1', {
        height: '100%',
        width: '100%',
        videoId: 'OmketaA0m0',
        events: {
            'onReady': onPlayerReady
        }
    });
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function onPlayerReady(event) {
    event.target.playVideo();
}