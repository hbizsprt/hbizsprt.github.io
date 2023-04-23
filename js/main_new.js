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
        heroImagesSlide();
      }
      

    console.log(openningCurrentIndex);

  }
  const heroImages=document.querySelectorAll('#heroImageArea img');
  let currentIndex=0;
  function heroImagesSlide(){
    setTimeout(heroImagesSlide,5000);
    heroImages.forEach((image)=>{
      image.classList.remove('appear');
    });
    heroImages[currentIndex].classList.add('appear');
    currentIndex++;
    if(currentIndex>heroImages.length-1){
      currentIndex=0
    }

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