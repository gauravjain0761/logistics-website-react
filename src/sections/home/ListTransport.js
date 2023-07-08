import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {  StyledListBox } from "./homeStyled";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const ListTransport = () => {
  return (
    <React.Fragment>
      <StyledListBox py={8}>
        <Container>
          <Grid container spacing={0}>
            <Grid item lg={6}>
              <Card sx={{p:5}}>
                <Box >
                  <Box>
                    <Typography variant="h4">
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas
                    </Typography>
                  </Box>
                  <Box>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                        </ListItemIcon>
                        <ListItemText>
                          Lorem Ipsum es simplemente el
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                        </ListItemIcon>
                        <ListItemText>
                          Texto de relleno de las imprentas y
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                        </ListItemIcon>
                        <ListItemText>Archivos de texto.</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                        </ListItemIcon>
                        <ListItemText>
                          Es un hecho establecido hace demasiado
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box>
                  <Button variant="contained">lorem ipsum</Button>
                </Box>
              </Card>
            </Grid>
            <Grid item lg={6} justifyContent={"center"} alignContent={"center"}>
              <Box>
                <Box margin={"auto"} component={"img"} src={"./shipment.jpg"} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledListBox>
    </React.Fragment>
  );
};

export default ListTransport;
