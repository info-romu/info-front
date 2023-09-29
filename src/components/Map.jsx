import React from 'react';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Carte() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 48.96659582510616, lng: 2.868997382308014 }), []);

  return (
    <GoogleMap zoom={11} center={center} mapContainerClassName="rounded mb-8 xl:mb-0 h-60 md:h-72 w-full xl:w-3/5 me-5 ">
      <Marker position={center} />
    </GoogleMap>
  );
}