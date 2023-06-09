import { galleryItems } from './gallery-items.js';
// Change code below this line
const listRef = document.querySelector('.gallery')
const markup = galleryItems.map(({description, original, preview}) => {
return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
}).join('')

listRef.insertAdjacentHTML('beforeend', markup);

listRef.addEventListener('click', onClickImageHandler);

function onClickImageHandler(event) {

event.preventDefault();

if(event.target.nodeName !== 'IMG') {
return;
}

const originalSizeImage = event.target.getAttribute('data-source');
const instance = basicLightbox.create(`
    <img src="${originalSizeImage}" width="800" height="600">
`);

instance.show();
}

console.log(galleryItems);
