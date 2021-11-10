import {showAlert} from './util.js';

const serverData = 'https://24.javascript.pages.academy/keksobooking/data';
const serverDataSend = 'https://24.javascript.pages.academy/keksobooking';


const getData = (onSuccess) => {
  fetch(serverData)
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
  fetch(serverDataSend,
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
