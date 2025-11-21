document.addEventListener('DOMContentLoaded',()=>{
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();

  const gallery=document.getElementById('gallery');
  if(gallery){
    const artworks=[
      {title:'Posa 1',img:'img/gallery/20241210_235003.jpg',desc:'profilo'},
      {title:'Posa 2',img:'img/gallery/20250324_093016.jpg',desc:'ciao'},
      {title:'Posa 3',img:'img/gallery/20250914_165748.jpg',desc:'lo so dovrebbero essere foto di oggetti ma sono esibizionista'}
    ];

    artworks.forEach(a=>{
      const card=document.createElement('div');
      card.className='card';
      card.innerHTML=`<img src="${a.img}" alt="${a.title}"><h3>${a.title}</h3><p>${a.desc}</p>`;
      card.addEventListener('click',()=>openLightbox(a));
      gallery.appendChild(card);
    });
  }

const closet=document.getElementById('closet');
  if(closet){
    const artworks=[
      {title:'Oggetto 1',img:'img/closet/IMG_0377.jpeg',desc:'la cuiunata'},
      {title:'Oggetto 2',img:'img/closet/IMG_0378.jpeg',desc:'scarpe'},
      {title:'Oggetto 3',img:'img/closet/IMG_0379.jpeg',desc:'ancora scarpe'}
    ];

    artworks.forEach(a=>{
      const card=document.createElement('div');
      card.className='card';
      card.innerHTML=`<img src="${a.img}" alt="${a.title}"><h3>${a.title}</h3><p>${a.desc}</p>`;
      card.addEventListener('click',()=>openLightbox(a));
      closet.appendChild(card);
    });
  }

  
  const lightbox=document.getElementById('lightbox');
  const lightboxImg=document.getElementById('lightbox-img');
  const lightboxCaption=document.getElementById('lightbox-caption');
  const closeBtn=document.getElementById('close-lightbox');

  function openLightbox(art){
    if(!lightbox)return;
    lightboxImg.src=art.img;
    lightboxCaption.textContent=`${art.title} — ${art.desc}`;
    lightbox.classList.remove('hidden');
  }

  if(closeBtn){
    closeBtn.addEventListener('click',()=>lightbox.classList.add('hidden'));
  }

  window.addEventListener('click',e=>{
    if(e.target===lightbox){lightbox.classList.add('hidden');}
  });
});



// Slideshow sfondo semplice
document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.getElementById("bg-slideshow");
  if (!slideshow) return;

  const images = [
    'img/gallery/20241210_235003.jpg',
    'img/gallery/20250324_093016.jpg',
    'img/gallery/20250914_165748.jpg'
  ];

  // Inserisce le immagini nel DOM
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("bg-image");
    slideshow.appendChild(img);
  });

  const slides = Array.from(document.querySelectorAll(".bg-image"));
  let current = 0;

  // Mostra la prima immagine
  slides[0].classList.add("active");

  // Cambia immagine ogni 7 secondi
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 7000);
});


// toggle per menù mobile
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
