import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")


// Створюємо функцію для створення розмітки, та рендеремо її у галерею
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
const siteGallery = makeGallery(galleryItems)
galleryEl.insertAdjacentHTML("beforeend", siteGallery)

//  

// console.log(galleryEl);

// Створюємо галерею за дапомогою Lightbox

galleryEl.addEventListener("click", makeDigImg)

function makeDigImg(event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    return
  }
  const instance = basicLightbox.create(`<img
      src = "${event.target.dataset.source}" width="800" height="600"
    />`)
  instance.show();
  

  document.addEventListener("keydown", function closePicture (event){
    console.log(event.key, event.code);
    if (event.code !== "Escape") {
      return
    }
    instance.close()
    document.removeEventListener("keydown", closePicture)
  });
  
}
