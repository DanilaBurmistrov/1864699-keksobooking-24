import {showAlert} from './util.js';

const URL_SERVER_DATA = 'https://24.javascript.pages.academy/keksobooking/data';
const URL_SERVER_DATA_SEND = 'https://24.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(URL_SERVER_DATA)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      showAlert('Ошибка загрузки данных с сервера : - (');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(URL_SERVER_DATA_SEND,
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
    .catch(onFail);
};

export {getData, sendData};
