import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Box } from "@mui/material";
import DirectionRenderComponent from "./directionRenderComponent";
import DummyLocations from "@/utils/dummyLocations";
import Iconify from "@/components/iconify/Iconify";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function TrackGoogleMaps({ data = [] }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
  });

  const [state, setState] = React.useState({
    defaultZoom: 5,
    map: null,
    center: {
      lat: 23.217724,
      lng: 72.667216,
    },
  });

  const [map, setMap] = React.useState(null);
  const [showPopUp, setShowPopUp] = React.useState(false);

  return isLoaded ? (
    <Box component="div" sx={{ position: "relative", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={new window.google.maps.LatLng(23.21632, 72.641219)}
        zoom={state.defaultZoom}
      >
        {data &&
          data?.length > 0 &&
          data.map((elem, index) => {
            return (
              <DirectionRenderComponent
                key={index}
                index={index + 1}
                strokeColor={elem.strokeColor}
                from={elem.from}
                to={elem.to}
                onClickMarker={() => {
                  setShowPopUp(1);
                }}
                showPopUp={
                  <>
                    {showPopUp == 1 && (
                      <InfoWindow onCloseClick={() => setShowPopUp(false)}>
                        <div>
                          <div>nhà trọ cho thuê</div>
                          <div>1.500.000đ</div>
                        </div>
                      </InfoWindow>
                    )}
                  </>
                }
              />
            );
          })}

        {/* <Marker
          //   key={index}
          //   options={{ icon: "https://i.imgur.com/9G5JOp8.png" }}
          position={state.center}
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
        </Marker> */}
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default React.memo(TrackGoogleMaps);
