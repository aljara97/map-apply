import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'

/*
      <MapContainer center={{lat: '', lng: ''}} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      </MapContainer>
*/
const MapView = () => {
  return(
    <div>
      <MapContainer center={{lat: '', lng: ''}} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
        <Markers/>
      </MapContainer>
    </div>
  )
}

export default MapView