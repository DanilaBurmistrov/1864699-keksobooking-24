import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((ad) => {
      onSuccess(ad);
    })
    .catch(() => {
      showAlert('Ошибка загрузки данных с сервера : - (');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
