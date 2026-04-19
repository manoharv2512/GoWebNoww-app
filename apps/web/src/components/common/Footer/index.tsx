import { Divider, Typography } from "@mui/material";

type FooterProps = {
  bgColorState?: string;
  fontColor?: string;
};

const Footer: React.FC<FooterProps> = ({
  bgColorState = "transparent",
  fontColor = "rgba(255, 255, 255, 0.7)",
}) => {
  return (
    <div style={{ backgroundColor: bgColorState }}>
      <Divider sx={{ my: 2, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

      <Typography variant="body2" align="center" sx={{ color: fontColor }}>
        © {new Date().getFullYear()} Knectaa. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
