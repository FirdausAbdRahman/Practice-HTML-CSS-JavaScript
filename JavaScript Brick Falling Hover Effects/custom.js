const fall = document.querySelectorAll('span');

function falling(){
  this.classList.toggle('fall');
}

fall.forEach(fall => fall.addEventListener('mouseover', falling));
