  // credits to euroster :3

  // song currently is ecco2k - hold me down like gravity
  
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '1080',
        width: '1920',
        videoId: '-nY_RiKWFoI',
        playerVars: {
          playlist: '-nY_RiKWFoI',
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          hl: 'ru-ru',
          hd: 1,
          vq: 'hd1080',
          loop: 1,
          modestbranding: 1,
          showinfo: 0,
          autohide: 1,
          color: 'white',
          iv_load_policy: 3,
          theme: 'light',
          rel: 0
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
  }

function onPlayerReady(event){
    player.setVolume(50);
}