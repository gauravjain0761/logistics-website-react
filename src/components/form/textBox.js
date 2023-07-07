import {
  FormHelperText,
  Icon,
  InputAdornment,
  TextField,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { FormControl } from "./index";

const TextBox = (props) => {
  const {
    name,
    label,
    variant,
    type,
    InputLabelProps,
    icon,
    value,
    required,
    multiline,
    inputAdornmentPosition = "end",
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
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
      sx={formSx}
    >
      <TextField
        error={helperText ? true : false}
        variant={variant}
        name={name}
        sx={sx}
        label={label}
        InputLabelProps={InputLabelProps}
        type={type}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        size={size}
        rows={rows}
        multiline={multiline}
        required={required}
        disabled={disabled}
        autoComplete={"false"}
        value={value}
        onChange={(e) => props.onChange(e)}
        inputProps={{ maxLength: isMaxLenght ? isMaxLenght : null }}
        InputProps={{
          endAdornment: (
            <InputAdornment position={inputAdornmentPosition}>
              {/* <Icon>{icon}</Icon> */}
              {icon}
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: "flex" }}>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </Box>
    </FormControl>
  );
};

TextBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  InputLabelProps: PropTypes.string,
  icon: PropTypes.string,
  inputAdornmentPosition: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  rows: PropTypes.string,
  onKeyDown: PropTypes.func,
};

export default TextBox;
