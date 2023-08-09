import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Table } from "react-bootstrap";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JobDialog = ({ addressOpen = [], onClose }) => {
  return (
    <Dialog
      open={addressOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => onClose(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Drop Address Detail</DialogTitle>
      <DialogContent>
        {addressOpen?.address &&
          addressOpen?.address?.length > 0 &&
          addressOpen?.address && (
            <TableRow>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <thead>
                    <tr style={{ width: "100%" }}>
                      <th>Sr no.</th>
                      <th>Address</th>
                      {/* <th>Latitude</th>
                      <th>Longitude</th> */}
                      {/* <th>Type</th> */}
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "left", fontSize: "14px" }}>
                    {addressOpen?.address &&
                      addressOpen?.address?.length > 0 &&
                      addressOpen?.address.map((addressItem, addressIndex) => (
                        <tr key={`Address-${addressIndex}`}>
                          <td style={{ verticalAlign: "middle" }}>
                            {addressIndex + 1}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {addressItem.address}
                          </td>
                          {/* <td style={{ verticalAlign: "middle" }}>
                              {addressItem.lat}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {addressItem.long}
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              {addressItem.type}
                            </td> */}
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </TableContainer>
            </TableRow>
          )}
      </DialogContent>
    </Dialog>
  );
};

export default JobDialog;
