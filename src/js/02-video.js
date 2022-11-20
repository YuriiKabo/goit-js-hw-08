import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(
    (onPlayUpdate = evt => {
      localStorage.setItem('videoplayer-current-time', evt.seconds);
    }),
    1000
  )
);

const currentTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : 0;

player.setCurrentTime(currentTime);
