

var player;

function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'dMcmB7PKv-I',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'modestbranding': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError,
            'onStateChange': onPlayerStateChange,
            'onPlaybackQualityChange': onPlayerPlaybackQualityChange
        }

    });
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function onPlayerReady(event) {


    // https://www.youtube.com/watch?v=lpIe95cS2JM&list=RDjUViyhRCi5U&index=4
    // v=dX87zWN2E4g
    // list=RDjUViyhRCi5U
    // index=2


    event.target.loadPlaylist('RDjUViyhRCi5U', 'playlist', 0, 0, 'hd1080');
}

function onPlayerError(event) {
    console.error(event.data);
}

function onPlayerStateChange(event) {
    changeBorderColor(event.data);
}

function onPlayerPlaybackQualityChange(event) {
    console.log(event.data);
}

function changeBorderColor(playerStatus) {

    if (playerStatus == -1) {
        console.log("unstarted");
    } else if (playerStatus == 0) {
        console.log("ended");
    } else if (playerStatus == 1) {
        console.log("playing");
    } else if (playerStatus == 2) {
        console.log("paused");
    } else if (playerStatus == 3) {
        console.log("buffering");
    } else if (playerStatus == 5) {
        console.log("cued");
        event.target.playVideo();
    }
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);


