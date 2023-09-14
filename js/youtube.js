

/* youtube */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: 'KF54KKt2oBE', 
    playerVars: {
      autoplay: 1,
      loop: 0,
      playlist: 'KF54KKt2oBE',
      showinfo: 0,
      mute: 1,
      controls: 0,
      start : 72,
      end: 120
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      },
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          event.target.seekTo(72);
          event.target.playVideo(); 
        }
      }
    }
  })
}


/* trigger */

/* modal */
let modal = document.getElementsByClassName('inquiry-modal');

function openModal() {
  modal.classList.add('active')
}
function closeModal() {
  modal.classList.remove('active')
}
