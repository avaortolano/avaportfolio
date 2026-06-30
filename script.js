const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show')}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const nav = document.querySelector('.site-nav');
document.querySelector('.menu-toggle')?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const topButton = document.querySelector('.top-button');
window.addEventListener('scroll',()=>{topButton.classList.toggle('show', window.scrollY > 700)});
topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.className='lightbox';
    overlay.innerHTML=`<button aria-label="Close image">Close</button><img src="${img.src}" alt="${img.alt}">`;
    overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.tagName==='BUTTON') overlay.remove()});
    document.body.appendChild(overlay);
  });
});
