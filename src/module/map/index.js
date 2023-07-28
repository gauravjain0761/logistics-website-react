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
  Stack,
} from "@mui/material";
import Iconify from "@/components/iconify/Iconify";

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
      <Box>
        <Stack direction="row" spacing={2}>
          <Box>
            <Box
              component="img"
              src="/assets/images/dashboard/portfolio.jpeg"
              sx={{
                borderRadius: "50%",
                border: "3px solid #ff7534",
                width: "80px",
                height: "80px",
              }}
            />
          </Box>
          <Stack>
            <Box>
              <Typography color="primary" fontSize={14} variant="subtitle1">
                Mr. Gaurav
              </Typography>
            </Box>
            <Stack spacing={0.2} pb={0.8}>
              <Stack direction="row" spacing={0.4}>
                <Box>
                  <Typography fontWeight={400} fontSize={10}>
                    Job Success Rate :
                  </Typography>
                </Box>
                <Box>
                  <Typography color="primary" fontWeight={500} fontSize={10}>
                    98 %
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <LinearProgress variant="determinate" value={98} />
              </Box>
            </Stack>
            <Box>
              <Rating
                value={4}
                readOnly
                size="small"
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontSize: "12px !important",
                }}
              />
            </Box>
          </Stack>
        </Stack>
        <Box py={1}>
          <Stack direction="row" spacing={1}>
            <Chip
              icon={<Iconify icon="mdi:chat" />}
              size="small"
              label="Open For Chat"
              variant=""
            />
            <Chip
              icon={<Iconify icon="material-symbols:check-circle" />}
              size="small"
              label="Start Job"
              variant=""
            />
          </Stack>
        </Box>
        <Divider />
        <Box pt={1}>
          <Typography fontSize={12} fontWeight={600}>
            Bid: $500
          </Typography>
        </Box>
      </Box>
    );
  };

  return isLoaded ? (
    <Box component="div" sx={{ position: "relative", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <Marker
          //   key={index}
          //   options={{ icon: "https://i.imgur.com/9G5JOp8.png" }}
          position={center}
          onClick={() => {
            setShowPopUp(1);
          }}
          zoom={2}
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
