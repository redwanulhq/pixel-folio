import { Box } from "@mui/material";

const SingleImage = ({ i, item, height }) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        border: "1px solid #ddd",
        gridColumn: i === 0 ? "span 2" : "inherit",
        gridRow: i === 0 ? "span 2" : "inherit",
        height: i === 0 ? height * 2 + 15 : height,
        minHeight: 170,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          "& img": { height: "100%", width: "100%", objectFit: "cover" },
        }}
      >
        <img src={item?.img} />
      </Box>
    </Box>
  );
};

export default SingleImage;
