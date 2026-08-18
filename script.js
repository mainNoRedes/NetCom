document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const target=document.querySelector(link.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
    });
  });

  const modal=document.getElementById('locationModal');
  const modalImage=document.getElementById('locationModalImage');
  const modalTitle=document.getElementById('locationModalTitle');
  const modalWhatsapp=document.getElementById('locationModalWhatsapp');

  const closeModal=()=>{
    if(!modal)return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    if(modalImage) modalImage.removeAttribute('src');
  };

  document.querySelectorAll('.location-card').forEach(card=>{
    card.addEventListener('click',()=>{
      const place=card.dataset.place;
      const image=card.dataset.image;
      if(!modal)return;
      modalTitle.textContent=place;
      modalImage.src=image;
      modalImage.alt=`Cobertura NetCom en ${place}`;
      modalWhatsapp.href=`https://wa.me/527121079888?text=${encodeURIComponent(`Hola NetCom, quiero consultar la cobertura en ${place}.`)}`;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.classList.add('modal-open');
    });
  });

  document.querySelectorAll('[data-close-location]').forEach(element=>element.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
});
