// Intersection Observer API

function inViewCallback(entries, obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}

function onScrollCallBack(entries){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      toTop.classList.add('scrolled');
    }else{
      toTop.classList.remove('scrolled');
    }
  });
}
const toTop=document.getElementById('to_top');

const inViewObserver = new IntersectionObserver(inViewCallback, {
  threshold: 0.2,
  });

const onScrollObserver = new IntersectionObserver(onScrollCallBack);
onScrollObserver.observe(document.getElementById('target'));

toTop.addEventListener('click',e =>{
 e.preventDefault();

 window.scrollTo({
  top:0,
  behavior:'smooth',
 });
});