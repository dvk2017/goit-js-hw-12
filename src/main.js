import fetchFromPxb from './js/pixabay-api.js';
import makeMarkup from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputField = document.querySelector('.query');
const marcupGallery = document.querySelector('.gallery');
const loadingMessage = document.querySelector('.loading-message');

let lightbox1 = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt', //'alt',
  captionDelay: 250,
  /* options */
});

function loadingMessageOn() {
  loadingMessage.classList.remove('visually-hidden');
}

function loadingMessageOff() {
  loadingMessage.classList.add('visually-hidden');
}

function search(evt) {
  evt.preventDefault();

  if (inputField.value.trim() === '') {
    return;
  }

  marcupGallery.innerHTML = '';

  loadingMessageOn();

  fetchFromPxb(inputField.value)
    .then(ans => {
      inputField.value = '';
      if (ans.hits.length === 0) {
        throw new Error('noImagesMatching');
      }

      return ans.hits;
    })
    .then(images => {
      const markup = makeMarkup(images);

      marcupGallery.insertAdjacentHTML('beforeend', markup);

      lightbox1.refresh();
    })
    .catch(showAlert)
    .finally(loadingMessageOff);
}

function showAlert(err) {
  if (err.message === 'noImagesMatching') {
    iziToast.show({
      messageColor: '#fff',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      timeout: 3000,
      maxWidth: '432px',
      messageSize: '16px',
      icon: 'material-icons',
      iconText: 'highlight_off',
      iconColor: '#ffffff',
      color: '#ef4040', // blue, red, green, yellow
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    });
  } else {
    iziToast.show({
      title: `${err}`,
      titleColor: '#fff',
      messageColor: '#fff',
      message: 'Unable loading images',
      timeout: 3000,
      maxWidth: '432px',
      messageSize: '16px',
      icon: 'material-icons',
      iconText: 'highlight_off',
      iconColor: '#ffffff',
      color: '#ef4040', // blue, red, green, yellow
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    });
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', search);
