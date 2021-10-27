import L from 'leaflet'

 export const MapIcon = L.icon({
  iconUrl: require('../assets/Map_pin_icon.svg'),
  iconRetinaUrl: require('../assets/Map_pin_icon.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon"
});
