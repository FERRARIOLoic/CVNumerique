function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}


const box = document.querySelector('.box');

document.addEventListener('scroll', function () {
  if(isInViewport(box)){
    document.getElementById("box").classList.add('scaleInFwd');
    document.getElementById("box").classList.remove('hide');
  }
  else {
    
  document.getElementById("box").classList.remove('scaleInFwd');
  document.getElementById("box").classList.add('hide');

  }
}, {
  passive: true
});