export default function makeMarkup(images) {
  return images.reduce(
    (
      html,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (html += `
        <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  
<diw class="img-prop-wrap">
    <div class="img-prop">
    <h3>Likes</h3>
    <p>${likes}</p>
    </div>
  <div class="img-prop">
    <h3>Viewes</h3>
    <p>${views}</p>
    </div>
  <div class="img-prop">
    <h3>Comments</h3>
    <p>${comments}</p>
    </div>
  <div class="img-prop">
    <h3>Downloads</h3>
    <p>${downloads}</p>
    </div>
</diw>
  
</li>
        `);
    },
    ''
  );
}
