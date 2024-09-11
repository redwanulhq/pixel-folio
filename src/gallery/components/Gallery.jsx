import { Box, Typography } from "@mui/material";
import { useState } from "react";
import iniData from "utils/iniData";
import { loadFromLocalStorage } from "utils/manageLocalStorage";
import SingleImage from "./SingleImage";
import "../styles/index.css";
import useElementSize from "hooks/useElementSize";

const Gallery = () => {
  const [targetRef, size] = useElementSize();
  const [galleryItems, setGalleryItems] = useState(
    loadFromLocalStorage("data") || iniData || []
  );

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "calc(100% - 30px)",
        height: "calc(100% - 30px)",
        maxWidth: "1100px",
        maxHeight: "725px",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ p: "15px 20px", borderBottom: "1px solid #efefef" }}>
        <Typography variant="h6" letterSpacing="1px" color="#555">
          Pixel Folio
        </Typography>
      </Box>
      <Box sx={{ height: "calc(100% - 55px)", overflowY: "auto" }}>
        <Box
          sx={{
            p: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "15px",
          }}
        >
          {galleryItems?.map((item, i) => (
            <SingleImage
              key={i}
              {...{
                i,
                item,
                galleryItems,
                setGalleryItems,
                height: size?.width,
              }}
            />
          ))}
          <Box
            ref={targetRef}
            sx={{
              borderRadius: "8px",
              border: "2px dashed #ddd",
              height: size?.width,
              minHeight: 170,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h4" color="#ddd">
              +
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
