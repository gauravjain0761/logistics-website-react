import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  Box,
  Chip,
  Divider,
  LinearProgress,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "@/components/iconify/Iconify";

const DirectionRenderComponent = (props) => {
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [state, setState] = React.useState({
    directions: null,
  });
  let delayFactor = 0;

  React.useEffect(() => {
    const startLoc = props.from.lat + ", " + props.from.lng;
    const destinationLoc = props.to.lat + ", " + props.to.lng;
    getDirections(startLoc, destinationLoc);
  }, [props]);

  const getDirections = async (startLoc, destinationLoc) => {
    const directionService = new window.google.maps.DirectionsService();
    directionService.route(
      {
        origin: startLoc,
        destination: destinationLoc,
        optimizeWaypoints: true,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        // console.log("status", status);
        if (status === window.google.maps.DirectionsStatus.OK) {
          setState({
            directions: result,
          });
        } else if (
          status === window.google.maps.DirectionsStatus.OVER_QUERY_LIMIT
        ) {
          delayFactor += 0.2;
          // if (delayFactor <= 10) delayFactor = 0.2;
          setTimeout(() => {
            getDirections(startLoc, destinationLoc);
          }, delayFactor * 200);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  let originMarker = null;
  let destinationMarker = null;
  if (state.directions && props.index) {
    originMarker = (
      <Marker
        defaultLabel={props.index.toString()}
        defaultIcon={null}
        position={{
          lat: parseFloat(props.from.lat),
          lng: parseFloat(props.from.lng),
        }}
        onClick={() => {
          setShowPopUp(1);
        }}
      />
    );
    destinationMarker = (
      <Marker
        label={props.index.toString()}
        defaultIcon={null}
        position={{
          lat: parseFloat(props.to.lat),
          lng: parseFloat(props.to.lng),
        }}
        onClick={() => {
          setShowPopUp(1);
        }}
      />
    );
  }

  return (
    <div>
      {originMarker}
      {destinationMarker}
      {state.directions && (
        <DirectionsRenderer
          directions={state.directions}
          options={{
            polylineOptions: {
              storkeColor: props.storkeColor,
              strokeOpacity: 0.4,
              strokeWeight: 4,
            },
            preserveViewport: true,
            suppressMarkers: true,
            icon: { scale: 3 },
          }}
        />
      )}
    </div>
  );
};

export default DirectionRenderComponent;
