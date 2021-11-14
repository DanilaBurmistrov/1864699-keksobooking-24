import {resetAdFormLocation} from './map.js';
import {getData} from './fetch.js';
import './form.js';
import {getFilteredData} from './filters.js';


getData((data) => {
  getFilteredData(data);
});
resetAdFormLocation();
