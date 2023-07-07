import { TextBox } from "@/components/form";
import {
  Box,
  Button,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Subscribe = () => {
  return (
    <Box sx={{ background: (theme) => theme.palette.primary.main }}>
      <Container>
        <CardContent sx={{ paddingBottom: "24px!imporatant" }}>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ color: (theme) => theme.palette.common.white }}
              >
                Subscribe Our Newsletter
              </Typography>
            </Box>
            <Box>
              <TextBox
                fullWidth
                color="inherit"
                size="small"
                placeholder="Enter your email address"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: (theme) => theme.palette.common.white,
                    borderRadius: "20px",
                    padding: "2px",
                  },
                  overflow: "hidden",
                }}
                formSx={{
                  "&.MuiFormControl-root": {
                    marginBottom: "0px!important",
                  },
                }}
                inputAdornmentPosition="end"
                icon={
                  <Button variant="contained" sx={{ borderRadius: "20px" }}>
                    Sent
                  </Button>
                }
                // onChange={()}
              />
            </Box>
          </Stack>
        </CardContent>
      </Container>
    </Box>
  );
};

export default Subscribe;
