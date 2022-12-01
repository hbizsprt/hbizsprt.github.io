'use strict';{
  const close=document.getElementById('close');
  const open=document.getElementById('open');
  const spContainer=document.querySelector('.sp_container');

  close.addEventListener('click',()=>{
    spContainer.classList.add('invisible');
  })
  open.addEventListener('click',()=>{
    spContainer.classList.remove('invisible');
  })
  const targets=document.querySelectorAll('.content');

  function callback(entries,obs){
    // console.log(entries);
    entries.forEach((entry)=>{
      if(!entry.isIntersecting){
        return;
        // isIntersectingがfalseなら早期リターン
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
      // 監視をやめる


    });
  }
  
  

  const options={
    threshold:0.8,
    rootMargin:'0px 0px -20px '
  }


  const observer =new IntersectionObserver(callback,options);

  targets.forEach(target=>{
    
    observer.observe(target);
  });

  // -----------detail--------------
const contentTitle=document.querySelectorAll('.content_title');
const contentDetail=document.querySelectorAll('.content_detail');


contentTitle.forEach((ct,index)=>{
  ct.addEventListener('click',()=>{
    const windowWidth = window.innerWidth;
    if(windowWidth>800){
      console.log('not');
      return; 
    }
    contentDetail.forEach(dt=>{
      dt.classList.remove('appear');
    })
    contentDetail[index].classList.add('appear');
    console.log('ADD');
    
  });
});

}

