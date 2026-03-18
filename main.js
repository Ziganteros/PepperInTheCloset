document.addEventListener('DOMContentLoaded',()=>{
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();

  const gallery=document.getElementById('gallery');
  if(gallery){
    const items=[
      {title:'Posa 1',img:'img/gallery/20241210_235003.jpg',desc:'Grande pensatore'},
      {title:'Posa 2',img:'img/gallery/20250324_093016.jpg',desc:'Grandissimo pensatore'},
      {title:'Posa 3',img:'img/gallery/20250914_165748.jpg',desc:'Sognatore'}
    ];

    items.forEach(a=>{
      const card=document.createElement('div');
      card.className='card';
      card.innerHTML=`<img src="${a.img}" alt="${a.title}"><h3>${a.title}</h3><p>${a.desc}</p>`;
      card.addEventListener('click',()=>openLightbox(a));
      gallery.appendChild(card);
    });
  }

  const closet=document.getElementById('closet');
  if(closet){
    const items=[
      {title:'Oggetto 1',img:'img/closet/IMG_0377.jpeg',desc:'scarpe'},
      {title:'Oggetto 2',img:'img/closet/IMG_0378.jpeg',desc:'ancora scarpe'},
      {title:'Oggetto 3',img:'img/closet/IMG_0379.jpeg',desc:'e ancora scarpe'}
    ];

    items.forEach(a=>{
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


// check dello status del back end delle app
document.querySelectorAll("tbody tr").forEach(row => {
  const link = row.querySelector("a");
  const status = row.querySelector(".status");

  const url = link.href;

  function check() {
    status.classList.remove("ok");

    fetch(url + "/health")
      .then(res => {
        if (res.ok) {
          status.classList.add("ok");
        }
      })
      .catch(() => {
        console.log("Offline:", url);
      });
  }

  check();
  // setInterval(check, 10000);
});
