import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showAlert(err) {
  if (err.message === 'noImagesMatching') {
    iziToast.show({
      messageColor: '#fff',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      timeout: 5000,
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
      timeout: 5000,
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

export function messageEndOfSearch() {
  iziToast.info({
    message: `We're sorry, but you've reached the end of search results.`,
    timeout: 5000,
    maxWidth: '432px',
    messageSize: '16px',
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  });
}
