//side scrolling
var item = document.getElementsByTagName('MAIN')[0];

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

// home squares
let squares = document.getElementByClassName('square');
let sq = [squares, squares];

let hr = document.getElementById('homeHr')
// setTimeout(function(){})
addHrClass = () => {
  hr.classList.add('hrAnimations');
}
document.addEventListener("DOMContentLoaded", addHrClass);
