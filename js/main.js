import {getMapPoints, resetAdFormLocation} from './map.js';
import {generateDataArray} from './data.js';
import './form.js';

const dataArray = generateDataArray();
getMapPoints(dataArray);
resetAdFormLocation();
