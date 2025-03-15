import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import '../components/MapComponent.css'
import mapMarker from '../mapMarker';
import Display from './Display';
import FilterPlace from '../components/filterPlace';

const center = {
  lat: 13.794370967164298,
  lng: 100.3224623898158,
}


function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDoxbEwmk155n-PmxI4d-XGLdbfQrUEEJA',
  })
  const [map, setMap] = React.useState(null)
  const [markers,setMarkers]= useState([]);
  const [selectMarker, setSelectMarker] = useState(null);
  const [fromMarker, setFromMarker] = useState(null);
  const [toMarker, setToMarker] = useState(null);
  const clickMarker = (marker) =>{
    if (!fromMarker){
      setFromMarker(marker);
    }else if (!toMarker){
      setToMarker(marker);
    }
  }
  const handleRemoveFromMarker = () =>{
   setFromMarker(null);
}

const handleRemoveToMarker = () =>{
   setToMarker(null);
}
  

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //const bounds = new window.google.maps.LatLngBounds(center)
    //map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mahidolPanBounds = {
    south: 13.785212,
    west: 100.307571,
    north: 13.804092,
    east: 100.337569,
  };
  const options = {
    zoomControl: true,  // You can still control zoom via buttons if you need
    scrollwheel: true, // Disable zooming with scroll wheel
    disableDoubleClickZoom: true, // Disable zoom on double click
    draggable: true, // Disable dragging (locks the position)
    center: center, // Lock the center position
    minZoom: 16,
    maxZoom: 50,
    restriction: {
      latLngBounds: mahidolPanBounds,
      strictBounds: true,
    },

  }
  useEffect(() => {
    if (isLoaded) {
      const markerArr = [];
        for(let i = 0; i < mapMarker.length; i++){
          const marker = mapMarker[i];
          markerArr.push({
            id: marker.id,
            title: marker.title,
            position: marker.position,
            imageBuilding: marker.imageBuilding,
            imageTram: marker.imageTram,
            icon:{
              url: marker.url,
              scaledSize: new window.google.maps.Size(marker.size,marker.size)
            }
          })
        }
        // Define markers only when the map is loaded
                setMarkers(markerArr);
    }
}, [isLoaded]);

  return isLoaded ? (
   <div>
    <FilterPlace/>
    <GoogleMap
      mapContainerClassName= "map-container"
      center={center}
      zoom={16}
      onLoad={onLoad}
      options={options}
      onUnmount={onUnmount}
    >
  
  {markers.map((marker) => (
                <Marker
                    key={marker.id}
                    position={marker.position}
                    icon={marker.icon}
                    title={marker.title}
                    onClick={() => clickMarker(marker)}
                />
            ))}
      <></>
    </GoogleMap>
       <Display fromMarker={fromMarker} toMarker = {toMarker} removeToMarker={handleRemoveToMarker} removeFromMarker={handleRemoveFromMarker}/>
       </div>
    
  ) : (
    <></>
  )
}

export default React.memo( MapComponent)