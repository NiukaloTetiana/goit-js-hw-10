import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createOptions } from './js/create-markup';

const refs = {
  selectedEl: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(({ data }) => {
    const options = createOptions(data);
    refs.selectedEl.innerHTML = options;

    new SlimSelect({
      select: refs.selectedEl,
    });
    refs.selectedEl.classList.remove('is-hidden');
  })
  .catch(error => {
    refs.errorEl.classList.remove('is-hidden');
    Notify.failure(`Try reloading the page!`);
  })
  .finally(() => {
    refs.loader.classList.add('is-hidden');
  });

const onBreedSelect = e => {
  e.preventDefault();

  const breedId = e.target.value;

  refs.loader.classList.remove('is-hidden');

  fetchCatByBreed(breedId)
    .then(response => {
      const markap = createMarkup(response[0]);

      refs.catInfo.innerHTML = markap;
    })
    .catch(error => {
      Notify.failure(`Hmm... There is no information about this cat`);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
};

refs.selectedEl.addEventListener('change', onBreedSelect);
