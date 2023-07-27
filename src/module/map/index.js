import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Box } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
  });

  const [map, setMap] = React.useState(null);
  const [showPopUp, setShowPopUp] = React.useState(false);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Box component="div" sx={{ position: "relative", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

        <Marker
          //   key={index}
          //   options={{ icon: "https://i.imgur.com/9G5JOp8.png" }}
          position={center}
          onClick={() => {
            setShowPopUp(1);
          }}
        >
          {showPopUp == 1 && (
            <InfoWindow onCloseClick={() => setShowPopUp(false)}>
              <div>
                <div>nhà trọ cho thuê</div>
                <div>1.500.000đ</div>
              </div>
            </InfoWindow>
          )}
        </Marker>
        
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
