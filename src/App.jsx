import { Box } from "@mui/material";
import Gallery from "gallery";

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#efefef",
      }}
    >
      <Gallery />
    </Box>
  );
};

export default App;
