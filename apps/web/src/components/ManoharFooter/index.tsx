import { Divider, Typography } from "@mui/material";

type ManoharFooterProps = {
  bgColorState?: string;
  fontColor?: string;
};

const ManoharFooter: React.FC<ManoharFooterProps> = ({
  bgColorState = "transparent",
  fontColor = "rgba(255, 255, 255, 0.7)",
}) => {
  return (
    <div style={{ backgroundColor: bgColorState }}>
      <Divider sx={{ my: 2, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

      <Typography variant="body2" align="center" sx={{ color: fontColor }}>
        © {new Date().getFullYear()} Knectaa. All rights reserved. <br />
        Designed & Developed by{" "}
        <a
          // href="https://your-portfolio-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: fontColor, textDecoration: "underline" }}
        >
          Manohar Varma
        </a>
      </Typography>
    </div>
  );
};

export default ManoharFooter;
