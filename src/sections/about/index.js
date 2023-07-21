import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  const handleRead = (boolean) => {
    if (boolean === false) {
      setReadMore(true);
    }else{
        setReadMore(false)
    }
  };
  return (
    <React.Fragment>
      <Box py={8}>
        <Container>
          <Grid container spacing={1} alignItems="center">
            <Grid item md={6}>
              <Box component="img" src="/aboutthumb.png" alt="thumbnail" />
            </Grid>
            <Grid item md={6}>
              <Stack spacing={1.5}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: "36px" }}>
                    About us
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#64666c",
                      lineHeight: "26px",
                      overflow: "hidden",
                      height: readMore ? "auto" : "16em",
                    }}
                  >
                    Far much that one rank beheld bluebird after outside ignobly
                    allegedly more when oh arrogantly vehement irresistibly
                    fussy penguin insect additionally wow absolutely crud
                    meretriciously hastily dalmatian a glowered inset one
                    echidna cassowary. Repeatedly dreamed alas opossum but
                    dramatically despite expeditiously that jeepers loosely
                    yikes that as or eel underneath kept and slept compactly far
                    purred sure abidingly up above fitting to strident wiped set
                    waywardly far the and pangolin horse approving paid chuckled
                    cassowary oh above a much opposite far much hypnotically
                    more therefore wasp less that hey apart well like while
                    superbly orca and far hence one.
                    <br />
                    Far much that one rank beheld bluebird after outside ignobly
                    allegedly more when oh arrogantly vehement irresistibly
                    fussy penguin insect additionally wow absolutely crud
                    meretriciously hastily dalmatian a glowered inset one
                    echidna cassowary. Repeatedly dreamed alas opossum but
                    dramatically despite expeditiously that jeepers loosely
                    yikes that as or eel underneath kept and slept compactly far
                    purred sure abidingly up above fitting to strident wiped set
                    waywardly far the and pangolin horse approving paid chuckled
                    cassowary oh above a much opposite far much hypnotically
                    more therefore wasp less that hey apart well like while
                    superbly orca and far hence one.
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => handleRead(readMore)}
                  >
                    {readMore ? "Read Less" : "Read More"}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
