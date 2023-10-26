import { useAuthContext } from "@/auth/useAuthContext";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SubscriptionDialog = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    if (router?.route === "/dashboard/driver/subscription") {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [open]);
  return (
    <div>
      <Dialog
        open={user?.plan?.plan_id != undefined || null ? false : open}
        TransitionComponent={Transition}
        components="form"
        scroll="paper"
        // onClose={() => {
        //   onClose();
        //   handleClose();
        // }}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "&.MuiDialog-root": {
            zIndex: 100,
          },
          "& .MuiPaper-rounded": {
            borderRadius: "0px",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "#f2f2f2",
          },
        }}
        maxWidth="xs"
      >
        <DialogContent dividers={"paper"}>
          <Stack textAlign={"left"} mt={2}>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{ cursor: "pointer", fontSize: "16px", fontWeight: 500 }}
            >
              Please Subscribe to Access this Page
            </Typography>
          </Stack>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => router.push("subscription")}
          >
            Subscribe Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SubscriptionDialog;
