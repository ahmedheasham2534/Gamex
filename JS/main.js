
// in the name of Allah
//////////////add location//////////////////
let add=document.getElementById('add')
let closeIcon = document.getElementById('close')
var winClosed = setTimeout(function () {
    add.style.right='2%'
}, 10000);
var winClosed = setTimeout(function () {
    add.style.right='-100%'
}, 60000);


closeIcon.onclick=function(){
    add.style.display='none'
}

//////////////video location//////////////////
const record = document.getElementById('record');
record.addEventListener('mouseenter', () => {
      record.play();
    });
    record.addEventListener('mouseleave', () => {
        record.pause();
      });
  
