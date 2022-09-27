import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")
const siteGallery = makeGallery(galleryItems)
galleryEl.insertAdjacentHTML("beforeend", siteGallery)


function makeGallery(gallery) {
    return gallery.map(({ preview, original, description }) => `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
       class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `).join("")
  }

//  

console.log(siteGallery);

galleryEl.addEventListener("click", makeDigImg)

function makeDigImg(event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    console.log(event.target.dataset)
    const imgW = event.target.querySelector(".gallery__image")
    console.log(event.target.source);
    return
  }
  console.log(event.target.dataset.source);
  const instance = basicLightbox.create( `<img
      src = "${event.target.dataset.source}" width = 400
    />`)
  
  instance.show();
}