import {React, useState} from "react"
import { Marker } from "react-leaflet"
import {MapIcon} from './MapIcon'
import axios from 'axios';

async function GetPoints(url){
  const response = await axios.get(url)
  console.log(response.data)
  return response.data
}

const Markers = () => {

  const [points, setPoints] = useState([]);

  const baseUrl = "http://localhost:9000/api/v1/gps_points"

  GetPoints(baseUrl)
  .then((gpsPoints) => setPoints(gpsPoints))
  // <Marker position={[point["latitude"], point["longitude"]]} icon={MapIcon}></Marker>

  const arrayOfMarkers = () => {
    points.map((point) => 
    <Marker position={[point["latitude"], point["longitude"]]} icon={MapIcon}></Marker>
    )
  }

  return (
    <div>
      {arrayOfMarkers}
    </div>
  )
}

export default Markers