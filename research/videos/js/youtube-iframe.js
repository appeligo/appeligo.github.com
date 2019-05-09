
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    console.log("onYouTubeIframeAPIReady");
    player = new YT.Player('player', {
        'width': '100%',
        'height': '100%',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'modestbranding': 1,
            'rel': 0,
            'rec': 0,
            'fs': 0,
            'iv_load_policy': 3,
            //'list': 'PLB5odjO0TG0eOudh-hr73gzIOsB6gDwHf',
            //'listType': 'playlist',
            'origin': 'https://dirck.appeligo.com',
            'playsinline': 1,
            'widget_referrer': 'https://dirck.appeligo.com'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


var playlistArray;
var playListArrayLength;
var maxNumber;

var oldNumber = 0;
var NewNumber = 0;

function newRandomNumber() {
    oldNumber = NewNumber;
    NewNumber = Math.floor(Math.random() * maxNumber);
    if (NewNumber == oldNumber) {
        newRandomNumber();
    } else {
        return NewNumber;
    }
}

function onPlayerReady(event) {
    console.log(event);
    //event.target.mute();
    event.target.loadPlaylist({ "listType": "playlist", "list": "PLB5odjO0TG0eOudh-hr73gzIOsB6gDwHf" });
}

var firstLoad = true;
function onPlayerStateChange(event) {
    var playerStatus = event.data;
    if (playerStatus == -1) {
        console.log("unstarted");
    } else if (playerStatus == YT.PlayerState.ENDED) {
        console.log("ended");
        player.playVideoAt(newRandomNumber());
    } else if (playerStatus == YT.PlayerState.PLAYING) {
        console.log("playing");
        if (firstLoad) {
            firstLoad = false;
            playlistArray = player.getPlaylist();
            playListArrayLength = playlistArray.length;
            maxNumber = playListArrayLength;
            NewNumber = newRandomNumber();
            player.playVideoAt(newRandomNumber());
        }
    } else if (playerStatus == YT.PlayerState.PAUSED) {
        console.log("paused");
    } else if (playerStatus == YT.PlayerState.BUFFERING) {
        console.log("buffering");
    } else if (playerStatus == YT.PlayerState.CUED) {
        console.log("cued");
    }
}