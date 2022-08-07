import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// 1. Создание и рендер разметки
const galleryMarkupEl = galleryItems
  .map(
    item =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}" target="_blank" rel="noreferrer noopener"><img class="gallery__image"
  src='${item.preview}'
  alt='${item.description}'
  data-source='${item.original}'
/></div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkupEl);

//Реализация делегирования на div.gallery и получение url большого изображения.
// const imageEl = document.querySelector('.gallery__image');
// console.log(imageEl);
galleryEl.addEventListener('click', getUrlOriginalImg);

function getUrlOriginalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  //   console.log('event.target: ', event.target);
  //   console.log('event.currentTarget: ', event.currentTarget);
  console.log(event.target.dataset.source);
}
