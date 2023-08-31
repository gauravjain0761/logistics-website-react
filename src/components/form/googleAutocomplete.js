import React from "react";
import {
  Box,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { LocationOnOutlined } from "@mui/icons-material";
import FormControl from "./formControl";
const GoogleAutocomplete = (props) => {
  const {
    name,
    label,
    format,
    variant,
    type,
    InputLabelProps,
    startIcon,
    endIcon,
    value,
    required,
    multiline,
    inputEndAdornmentPosition = "end",
    inputStartAdornmentPosition = "start",
    fullWidth,
    helperText,
    disabled,
    rows,
    onKeyDown,
    isMaxLenght,
    maxLength,
    sx,
    size,
    formSx,
    placeholder,
    min,
    readOnly,
    onSelect,
    textBoxSx,
    isBackgroundColor = false,
    IconSx,
    onChange,
    EndIconClick,
    ...rest
  } = props;

  const handleSelect = async (value) => {
    let address, lat, long;
    address = value;
    await geocodeByAddress(address)
      .then((results) => {
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        lat = latLng?.lat;
        long = latLng?.lng;
        console.log("latLng", latLng);
      })
      .catch((error) => {
        address = "";
        latLongValue = "";
        console.error("Error", error);
      });
    await onSelect(address, lat, long);
  };

  return (
    <Box sx={{ my: 4, width: "100%" }}>
      <PlacesAutocomplete
        value={value}
        onChange={(e) => onChange(e)}
        onSelect={(e) => handleSelect(e)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Box component="div" sx={{ position: "relative" }}>
            <FormControl
              key={`key${name}`}
              error={helperText ? true : false}
              fullWidth={fullWidth}
              sx={{
                ...formSx,
                borderRadius: "0.25rem",
              }}
              size={size}
            >
              <TextField
                fullWidth={fullWidth}
                error={helperText ? true : false}
                variant={variant}
                sx={
                  !isBackgroundColor
                    ? {
                        "& .MuiOutlinedInput-input": {
                          background: (theme) => theme.palette.common.white,
                          borderRadius: "0.25rem",
                        },
                      }
                    : { ...textBoxSx }
                }
                label={label}
                InputLabelProps={InputLabelProps}
                type={type}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                size={size}
                rows={rows}
                min={min}
                multiline={multiline}
                required={required}
                disabled={disabled}
                autoComplete={"false"}
                inputProps={{
                  maxLength: isMaxLenght ? isMaxLenght : null,
                  min: min,
                  readOnly: readOnly,
                  onKeyDown: onKeyDown,
                }}
                InputProps={{
                  readOnly: readOnly,
                  min: min,
                  endAdornment: (
                    <>
                      {endIcon && (
                        <InputAdornment position={inputEndAdornmentPosition}>
                          {endIcon}
                        </InputAdornment>
                      )}
                    </>
                  ),
                  startAdornment: (
                    <>
                      {startIcon && (
                        <InputAdornment position={inputStartAdornmentPosition}>
                          {startIcon}
                        </InputAdornment>
                      )}
                    </>
                  ),
                }}
                {...getInputProps({
                  placeholder: "Search Address ...",
                  className: "location-search-input",
                })}
              />
            </FormControl>
            <Box sx={{ position: "relative" }}>
              <Paper
                elevation={2}
                sx={{
                  position: "absolute",
                  zIndex: 1200,
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  height: "max-content",
                }}
              >
                <Box className="autocomplete-dropdown-container">
                  {loading && <Box>Loading...</Box>}
                  {!loading &&
                    suggestions.map((suggestion, index) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <React.Fragment key={`${name}-${index}`}>
                          <nav aria-label="main mailbox folders">
                            <List
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>
                                    <LocationOnOutlined />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={suggestion.description}
                                  />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                          <Divider />
                        </React.Fragment>
                      );
                    })}
                </Box>
              </Paper>
            </Box>
          </Box>
        )}
      </PlacesAutocomplete>
    </Box>
  );
};

export default GoogleAutocomplete;
