import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")
// console.log(galleryEl);

// реалызуэмо створення галереї на класі
class ImgGallery{
    constructor(galleryItems) {
        this.galleryItems = galleryItems
    }

    makeGalleryEL() {
        console.log(this.galleryItems);
        const { preview, original, description } = this.galleryItems;
        const galleryObj = this.galleryItems.map(({ preview, original, description }) => 
            `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
        ).join("")
        return galleryObj
    }

    makeGallery(elem) {
        elem.insertAdjacentHTML("beforeend", this.makeGalleryEL())
        
    }
}

//створюємо саму галерею

const myGallery = new ImgGallery(galleryItems);
console.log(myGallery.makeGallery(galleryEl))


galleryEl.addEventListener("click", onClickImgMakeGallery)

function onClickImgMakeGallery (event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
    return
  }
    let gallery = new SimpleLightbox('.gallery a',{captionsData:"alt", captionDelay: 250});
    gallery.on('show.simplelightbox')
    
}


