import PropTypes from 'prop-types';
// @mui
import { Stack } from '@mui/material';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

NavDesktop.propTypes = {
  data: PropTypes.array,
  isOffset: PropTypes.bool,
};

export default function NavDesktop({ isOffset, data }) {
  return (
    <Stack component="nav" direction="row" spacing={2.5} sx={{ mr: 1, height: 1 }}>
      {data.map((link) => (
        <NavList key={link.title} item={link} isOffset={isOffset} />
      ))}
    </Stack>
  );
}
