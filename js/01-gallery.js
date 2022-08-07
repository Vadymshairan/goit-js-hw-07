import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

// 1. Создание и рендер разметки
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}
console.log(galleryMarkup);

//Реализация делегирования на div.gallery и получение url большого изображения.

galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  //   console.log('event.target: ', event.target);
  //   console.log('event.currentTarget: ', event.currentTarget);
  // console.log(e.target.dataset.source);
  const imgSourceUrl = e.target.dataset.source;
  console.log(imgSourceUrl);
}
