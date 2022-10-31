const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

console.log('anything');

// player.on('timeupdate', function (time) {
//   console.log('time', time);
// });
