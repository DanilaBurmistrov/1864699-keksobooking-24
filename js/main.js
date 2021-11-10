import {getMapPoints, resetAdFormLocation} from './map.js';
import {getData} from './fetch.js';
import './form.js';

getData(getMapPoints);
resetAdFormLocation();
