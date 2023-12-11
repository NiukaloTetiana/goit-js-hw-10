export const createOptions = data =>
  data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');

export const createMarkup = ({ url, breeds }) => ` <div class="container-photo">
      <img class ="img" src="${url}" alt="${breeds[0].name}" width="600" height="auto" />
      <div class="container-info">
        <h1>${breeds[0].name}</h1>
        <p>${breeds[0].description}</p>
        <p><span>Temperament: </span>${breeds[0].temperament}</p>
         </div>
         </div>`;
