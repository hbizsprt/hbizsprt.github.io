'use strict';
{
  const heroMessages=document.querySelectorAll('.message li');
  let openningCurrentIndex=0;
  const heroMask=document.getElementById('heroMask');
  function openning(){
    heroMask.classList.add('appear');
    const timeoutId=setTimeout(openning,2000);
    heroMessages.forEach((m)=>{
      m.classList.remove('visible');
    });
    
    
    heroMessages[openningCurrentIndex].classList.add('visible');
    openningCurrentIndex++;
    if(openningCurrentIndex===heroMessages.length){
      heroMask.classList.remove('appear');
        clearTimeout(timeoutId);
      }
      

    console.log(openningCurrentIndex);

  }
  function heroMessageSlide(){

  }
  window.setTimeout(openning,3000)


  // ------------SPMENU OPEN------------
  const spMenu=document.getElementById('sp_menu');
  const spOpen=document.getElementById('sp_open');
  spOpen.addEventListener('click',()=>{
    spMenu.classList.add('appear');
  });
  spMenu.addEventListener('click',()=>{
    spMenu.classList.remove('appear');
    
  });

}