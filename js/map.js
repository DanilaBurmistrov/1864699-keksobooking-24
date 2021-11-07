import {toggleFormState} from './form.js';
import {renderPopup} from './popup.js';

const MAP_CENTER_LAT = 35.68493;
const MAP_CENTER_LNG = 139.75213;
const MAP_SCALE = 10;
const ICON_SPECIAL_WIDTH = 52;
const ICON_SPECIAL_HEIGHT = 52;
const ICON_SPECIAL_ANCHOR_WIDTH = 26;
const ICON_SPECIAL_ANCHOR_HEIGHT = 52;
const ICON_DEFAULT_WIDTH = 40;
const ICON_DEFAULT_HEIGHT = 40;
const ICON_DEFAULT_ANCHOR_WIDTH = 20;
const ICON_DEFAULT_ANCHOR_HEIGHT = 40;
const BALOON_MIN_WIDTH = 300;
const BALOON_MAX_HEIGHT = 400;

toggleFormState(true);

const addressInput = document.querySelector('#address');

const map = L.map('map')
  .on('load', () => {
    toggleFormState(false);
  })
  .setView({
    lat: MAP_CENTER_LAT,
    lng: MAP_CENTER_LNG,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const iconSpecial = L.icon(
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [ICON_SPECIAL_WIDTH, ICON_SPECIAL_HEIGHT],
    iconAnchor: [ICON_SPECIAL_ANCHOR_WIDTH, ICON_SPECIAL_ANCHOR_HEIGHT],
  },
);

const mainMarker = L.marker(
  {
    lat: MAP_CENTER_LAT,
    lng: MAP_CENTER_LNG,
  },
  {
    draggable: true,
    icon: iconSpecial,
  },
);

mainMarker.addTo(map);
addressInput.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const getMapPoints = (array) => {

  markerGroup.clearLayers();

  array.forEach(({author, offer, location}) => {
    const icon = L.icon(
      {
        iconUrl: './img/pin.svg',
        iconSize: [ICON_DEFAULT_WIDTH, ICON_DEFAULT_HEIGHT],
        iconAnchor: [ICON_DEFAULT_ANCHOR_WIDTH, ICON_DEFAULT_ANCHOR_HEIGHT],
      },
    );

    const lat = location.lat;
    const lng = location.lng;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(renderPopup({author, offer, location}),
        {
          keepInView: true,
          minWidth: BALOON_MIN_WIDTH,
          maxHeight: BALOON_MAX_HEIGHT,
        },
      );
  });
};

const resetAdFormLocation = () => {
  map
    .setView({
      lat: MAP_CENTER_LAT,
      lng: MAP_CENTER_LNG,
    }, MAP_SCALE);

  mainMarker
    .setLatLng(
      {
        lat: MAP_CENTER_LAT,
        lng: MAP_CENTER_LNG,
      },
    );

  addressInput.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;
};

export {getMapPoints, resetAdFormLocation};

