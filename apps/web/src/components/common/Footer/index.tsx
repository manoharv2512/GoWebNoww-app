import { Divider, Typography } from "@mui/material";

type FooterProps = {
  bgColorState?: string;
  fontColor?: string;
  text?: string;
};

const Footer: React.FC<FooterProps> = ({
  bgColorState = "transparent",
  fontColor = "rgba(255, 255, 255, 0.7)",
  text = `© ${new Date().getFullYear()} Knectaa. All rights reserved.`,
}) => {
  return (
    <div style={{ backgroundColor: bgColorState }}>
      <Divider sx={{ my: 2, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

      <Typography variant="body2" align="center" sx={{ color: fontColor }}>
        {text}
      </Typography>
    </div>
  );
};

export default Footer;
