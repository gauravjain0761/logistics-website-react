import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import { Stack } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "550px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const OverlayTrigger = styled(InfoWindow)(({ theme }) => ({}));

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

  const getGooglePopUp = () => {
    return (
      <Box
        component="img"
        src="/assets/images/dashboard/portfolio.jpeg"
        sx={{
          borderRadius: "50%",
          border: "3px solid #ff7534",
          width: "100px",
          height: "100px",
        }}
      />
    );
  };

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
            <OverlayTrigger
              options={{ maxWidth: 350, height: 150 }}
              onCloseClick={() => setShowPopUp(false)}
            >
              <div>{getGooglePopUp()}</div>
            </OverlayTrigger>
          )}
        </Marker>
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
