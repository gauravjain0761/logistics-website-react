import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { BannerSection } from "@/components/banner";
import React from "react";
import Iconify from "@/components/iconify";

const FaqsPage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const[data,setData] =useState("");
  const FaqApi=async()=> await axiosInstance
   .get("api/front/page-details/about-us")
   .then((response) => {
     if (response?.status === 200) {
      setData(response.data.view_data);
     } else {
 console.log("error");     
     }
   })
   .catch((error) => {
    console.log(error,"About Us Page");
   });
 
   useEffect(()=>{
     FaqApi();
   },[])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="FAQs"
      />
      <Box py={8}>
        <Container>
          <Grid container spacing={0} justifyContent="center">
            <Grid item md={8}>
                
                  {[...Array(3)].map((elem, index) => {
                    return (
                      <Accordion
                        key={index}
                        expanded={expanded === `panel ${index + 1}`}
                        onChange={handleChange(`panel ${index + 1}`)}
                        sx={{
                          "&.MuiAccordion-root:before": {
                            opacity: 0,
                          },
                          marginBottom: "20px",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            expanded === `panel ${index + 1}` ? (
                              <Iconify
                                icon="zondicons:minus-solid"
                                width={35}
                              />
                            ) : (
                              <Iconify
                                icon="uiw:plus-circle"
                                width={35}
                                color={(theme) => theme.palette.primary.main}
                              />
                            )
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          sx={{
                            "& .MuiAccordionSummary-content.Mui-expanded": {
                              minHeight: "100%",
                              margin: "10px 0px",
                            },
                            "&.MuiAccordionSummary-root.Mui-expanded": {
                              background: (theme) => theme.palette.primary.main,
                              px: 4,
                              color: "#fff",
                              minHeight: "100%",
                              margin: "0px 0px",
                            },
                            borderRadius: "40px",
                            px: 4,
                            boxShadow: (theme) => theme.shadows[9],
                            py: 1,
                          }}
                        >
                          <Typography variant="h6" fontWeight={300}>
                            {" "}
                            How to you recruit your Virtual Assistants ?{" "}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ py: 2, px: 4 }}>
                          <Typography fontSize="15px" fontWeight={400}>
                            We cover multiple areas mainly involving Family Law,
                            Child Law, Emergency Emergency Law and Business
                            Law.The complete list of all the practice areas can
                            be found on this website.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default FaqsPage;
