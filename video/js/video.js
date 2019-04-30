

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

    event.target.playVideo();
    //event.target.loadPlaylist('RDjUViyhRCi5U','playlist',0,0,'hd1080');
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
    var color;
    if (playerStatus == -1) {
        color = "#0e3240"; // unstarted
    } else if (playerStatus == 0) {
        color = "#0e3240"; // ended 
    } else if (playerStatus == 1) {
        color = "#486860"; // playing = green
    } else if (playerStatus == 2) {
        color = "#42070f"; // paused = red
    } else if (playerStatus == 3) {
        color = "#bd4bbf"; // buffering = purple
    } else if (playerStatus == 5) {
        color = "#623c06"; // video cued = orange
    }

    if (color) {
        console.log("playerStatus: " + playerStatus);
        document.getElementById('player').style.backgroundColor = color;
    }
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);


