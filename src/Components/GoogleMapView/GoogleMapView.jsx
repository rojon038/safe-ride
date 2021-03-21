import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '500px',
  borderRadius: '5px'
};

const center = {
  lat: 24.89922,
  lng: 91.8685271
};

const GoogleMapView = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCtasGhgzFx-k484pDs9-kAFmXokKBTpb8"
  })
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    ) : <></>
  );
};

export default React.memo(GoogleMapView);