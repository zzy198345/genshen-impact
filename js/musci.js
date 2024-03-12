//音乐的播放与暂停
var onoff = document.querySelector('.music');
var audio = document.getElementById('au');
var ban = document.querySelector('#ban');
var flag = false;
onoff.onclick = function () {
   if (flag == false) {
      ban.style.display = 'block';
      flag = true;
      // if(audio.play)
      audio.pause();
   }
   else {
      ban.style.display = 'none';
      flag = false;
      // if(audio.pause)
      audio.play();
   }
}