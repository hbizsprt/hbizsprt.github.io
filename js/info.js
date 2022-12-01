'use strict';
{
 const dts=document.querySelectorAll('.dt');
 const dt1s=document.querySelectorAll('.dt1');
 const dt2s=document.querySelectorAll('.dt2');
 dts.forEach(dt => {
  dt.addEventListener('click',()=>{
   console.log('clicked');
   dt.parentNode.classList.toggle('appear');
   dts.forEach(el => {
    if (dt !== el) {
      el.parentNode.classList.remove('appear');
    }
  });
  });
});
 dt1s.forEach(dt1 => {
  dt1.addEventListener('click',()=>{
   console.log('clickeda');
   dt1.parentNode.classList.toggle('appear');
   dt1s.forEach(el => {
    if (dt1 !== el) {
      el.parentNode.classList.remove('appear');
    }
  });
  });
});
 dt2s.forEach(dt2 => {
  dt2.addEventListener('click',()=>{
   console.log('clickeda');
   dt2.parentNode.classList.toggle('appear');
   dt2s.forEach(el => {
    if (dt2 !== el) {
      el.parentNode.classList.remove('appear');
    }
  });
  });
});
}