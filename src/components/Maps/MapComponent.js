import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = ({ apiKey }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        {/* Add additional components, markers, etc. here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
