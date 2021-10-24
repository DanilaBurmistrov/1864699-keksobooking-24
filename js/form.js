const formsAttributes = document.querySelector('.ad-form');
const mapsAttributes = document.querySelector('.map__filters');
const fieldsetElements = document.querySelectorAll('fieldset');
const selectElements = document.querySelectorAll('select');

const toggleFormState = (isDisabled) => {
  if (isDisabled) {
    formsAttributes.classList.add('ad-form--disabled');
    mapsAttributes.classList.add('map__filters--disabled');
    fieldsetElements.forEach ((fieldsetElement) => {
      fieldsetElement.setAttribute('disabled', 'disabled');
    });
    selectElements.forEach ((selectElement) => {
      selectElement.setAttribute('disabled', 'disabled');
    });
  } else {
    formsAttributes.classList.remove('ad-form--disabled');
    mapsAttributes.classList.remove('map__filters--disabled');
    fieldsetElements.forEach ((fieldsetElement) => {
      fieldsetElement.removeAttribute('disabled', 'disabled');
    });
    selectElements.forEach ((selectElement) => {
      selectElement.removeAttribute('disabled', 'disabled');
    });
  }
};
toggleFormState ();
