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
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
      `).join("")
  }



console.log(siteGallery);
