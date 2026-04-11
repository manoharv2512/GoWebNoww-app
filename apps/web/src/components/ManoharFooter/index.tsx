import { Divider, Typography } from "@mui/material";

const ManoharFooter = () => {
  return (
    <>
      <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

      <Typography
        variant="body2"
        align="center"
        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
      >
        {/* © {currentYear} Knectaa. All rights reserved. */}
        Designed and Developed by Manohar
      </Typography>
    </>
  );
};

export default ManoharFooter;
