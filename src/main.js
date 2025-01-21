import { fetchFromPxb, PER_PAGE } from './js/pixabay-api.js';
import makeMarkup from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { showAlert, messageEndOfSearch } from './js/messages.js';

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

function loadMoreBtnOn() {
  loadMoreBtn.classList.remove('visually-hidden');
}

function loadMoreBtnOff() {
  loadMoreBtn.classList.add('visually-hidden');
}

function smoothScrollOnLoadMore() {
  const card = document.querySelector('.gallery-item');
  const cardHeight = card.getBoundingClientRect()['height'];
  window.scrollBy({
    top: 2 * cardHeight,
    behavior: 'smooth',
  });
}

let currentPage = 1;

async function search(evt) {
  evt.preventDefault();

  if (inputField.value.trim() === '') {
    return;
  }

  currentPage = 1;
  marcupGallery.innerHTML = '';
  loadMoreBtnOff();

  loadingMessageOn();

  try {
    const ans = await fetchFromPxb(inputField.value, currentPage);

    if (ans.hits.length === 0) {
      throw new Error('noImagesMatching');
    }

    if (ans.totalHits > ans.hits.length) {
      loadMoreBtnOn();
    }

    const images = ans.hits;
    const markup = makeMarkup(images);

    marcupGallery.insertAdjacentHTML('beforeend', markup);

    lightbox1.refresh();
  } catch (error) {
    showAlert(error);
  }
  loadingMessageOff();
}

async function loadMore() {
  currentPage += 1;

  loadMoreBtnOff();
  loadingMessageOn();

  try {
    const ans = await fetchFromPxb(inputField.value, currentPage);
    const images = ans.hits;
    const markup = makeMarkup(images);

    marcupGallery.insertAdjacentHTML('beforeend', markup);

    lightbox1.refresh();

    // autoscrol
    smoothScrollOnLoadMore();

    // check for collection end
    if (ans.totalHits / PER_PAGE < currentPage) {
      messageEndOfSearch();
    } else {
      loadMoreBtnOn();
    }
  } catch (error) {
    showAlert(error);
  }
  loadingMessageOff();
}

const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', search);
loadMoreBtn.addEventListener('click', loadMore);
